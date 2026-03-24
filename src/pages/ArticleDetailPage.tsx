import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Container } from '../components/common/Container'
import { useNewsArticles } from '../hooks/useNewsArticles'
import { formatDate } from '../utils/formatDate'
import { NewsErrorState } from '../components/news/NewsState'
import { NewsSkeleton } from '../components/news/NewsSkeleton'

function generateSummary(description: string) {
  const trimmed = description?.trim() || ''

  if (trimmed.length <= 120) {
    return trimmed
  }

  return trimmed.slice(0, 120) + '...'
}

export function ArticleDetailPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const originalUrl = searchParams.get('url')

  const { data, isLoading, error, refetch } = useNewsArticles()

  const article = data?.find((item) => item.id === id)

  const backToNews = () => {
    navigate('/#news')
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white py-20">
        <Container>
          <div className="mb-8">
            <div className="h-10 w-40 animate-pulse rounded-full bg-slate-200" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="aspect-[16/10] animate-pulse rounded-[2rem] bg-slate-200" />
            </div>

            <div className="space-y-4">
              <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200" />
              <div className="h-10 w-5/6 animate-pulse rounded bg-slate-200" />
              <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <NewsSkeleton key={index} />
            ))}
          </div>
        </Container>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white py-20">
        <Container>
          <div className="mb-8">
            <button
              onClick={backToNews}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 hover:border-slate-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </button>
          </div>

          <NewsErrorState onRetry={() => refetch()} />
        </Container>
      </main>
    )
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-white py-20">
        <Container>
          <div className="mb-8">
            <button
              onClick={backToNews}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 hover:border-slate-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </button>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center">
            <h1 className="text-2xl font-bold text-slate-900">Article not found</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The selected article could not be resolved from the current live feed.
            </p>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white py-14 sm:py-20">
      <Container>
        <div className="mb-8">
          <button
            onClick={backToNews}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 hover:border-slate-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </button>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="aspect-[16/10] bg-slate-100 lg:aspect-auto overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime-700">
                  {article.category}
                </span>

                <span className="text-sm font-medium text-slate-500">
                  {article.source}
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {article.title}
              </h1>

              <p className="mt-4 text-sm font-medium text-slate-500">
                {formatDate(article.publishedAt)}
              </p>

              <p className="mt-6 text-base leading-8 text-slate-700">
                {article.description}
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Summary
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {generateSummary(article.description)}
                </p>
              </div>

              {originalUrl ? (
                <div className="mt-8">
                  <a
                    href={originalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:scale-[1.02]"
                  >
                    Open original article
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </Container>
    </main>
  )
}