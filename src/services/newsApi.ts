import type { NewsArticle } from '../types/news'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const API_URL = 'https://newsapi.org/v2/everything'

type NewsApiArticle = {
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  source?: {
    name?: string
  }
}

function inferCategory(title: string, description: string) {
  const content = `${title} ${description}`.toLowerCase()

  if (
    content.includes('trend') ||
    content.includes('insight') ||
    content.includes('strategy') ||
    content.includes('audience')
  ) {
    return 'strategy'
  }

  if (
    content.includes('experience') ||
    content.includes('design') ||
    content.includes('responsive') ||
    content.includes('ux')
  ) {
    return 'experience'
  }

  if (
    content.includes('growth') ||
    content.includes('optimization') ||
    content.includes('performance') ||
    content.includes('campaign')
  ) {
    return 'growth'
  }

  return 'strategy'
}

function createArticleId(title: string, index: number) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

  return `${index}-${slug}`
}

export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  if (!API_KEY) {
    throw new Error(
      'Missing NewsAPI key. Please add VITE_NEWS_API_KEY to your .env file.'
    )
  }

  const params = new URLSearchParams({
    q: 'branding OR "digital experience" OR "user experience" OR "web design" OR marketing',
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: '9',
    apiKey: API_KEY,
  })

  const res = await fetch(`${API_URL}?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }

  const data = await res.json()

  if (!data.articles?.length) {
    return []
  }

  return data.articles
    .filter((item: NewsApiArticle) => item.title && item.url)
    .map((item: NewsApiArticle, index: number) => {
      const description = item.description || 'No description available.'

      return {
        id: createArticleId(item.title, index),
        title: item.title,
        description,
        image:
          item.urlToImage ||
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        url: item.url,
        source: item.source?.name || 'Unknown',
        publishedAt: item.publishedAt,
        category: inferCategory(item.title, description),
      }
    })
}