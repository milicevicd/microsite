import { useMemo, useRef, useState } from 'react'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { NewsTabs } from './NewsTabs'
import { NewsCard } from './NewsCards'
import { NewsSkeleton } from './NewsSkeleton'
import { NewsEmptyState, NewsErrorState } from './NewsState'
import { useNewsArticles } from '../../hooks/useNewsArticles'
import type { NewsCategory } from '../../data/newsCategories'

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all')
  const [visibleCount, setVisibleCount] = useState(6)

  const sectionRef = useRef<HTMLElement | null>(null)

  const { data, isLoading, error, refetch } = useNewsArticles()

  const handleCategoryChange = (category: NewsCategory) => {
    setActiveCategory(category)
    setVisibleCount(6)

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const filteredArticles = useMemo(() => {
    if (!data) return []

    if (activeCategory === 'all') {
      return data
    }

    return data.filter((article) => article.category === activeCategory)
  }, [activeCategory, data])

  const visibleArticles = filteredArticles.slice(0, visibleCount)
  const hasMoreArticles = visibleCount < filteredArticles.length
  const canLoadLess = visibleCount > 6

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3)

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.scrollBy({ top: 260, behavior: 'smooth' })
    }, 50)
  }

  const handleLoadLess = () => {
    setVisibleCount(6)

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <section ref={sectionRef} id="news" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mb-6 h-px w-full bg-gradient-to-r from-lime-400/0 via-lime-400/50 to-lime-400/0" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="News & trends"
            title="Live signals shaping digital brands right now."
            description="A curated feed of external articles filtered into strategic themes relevant to brand, experience, and growth."
            className="mb-0"
          />

          <NewsTabs activeCategory={activeCategory} onChange={handleCategoryChange} />
        </div>

        <div className="mt-10">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <NewsSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <NewsErrorState onRetry={() => refetch()} />
          ) : visibleArticles.length === 0 ? (
            <NewsEmptyState />
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {(hasMoreArticles || canLoadLess) ? (
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  {hasMoreArticles ? (
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      className="rounded-full bg-slate-950 text-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Load more
                    </button>
                  ) : null}

                  {canLoadLess ? (
                    <button
                      type="button"
                      onClick={handleLoadLess}
                      className="rounded-full border border-lime-400/40 bg-transparent px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-lime-400 hover:bg-lime-50"
                    >
                      Load less
                    </button>
                  ) : null}
                </div>
              ) : null}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}