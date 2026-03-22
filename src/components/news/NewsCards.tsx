import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NewsArticle } from '../../types/news'

type NewsCardProps = {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  const encodedUrl = encodeURIComponent(article.url)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/article/${article.id}?url=${encodedUrl}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime-700">
            {article.category}
          </span>

          <span className="text-xs font-medium text-slate-500">{article.source}</span>
        </div>

        <Link to={`/article/${article.id}?url=${encodedUrl}`} className="block">
          <h3 className="text-xl font-semibold leading-8 tracking-tight text-slate-900 transition-colors group-hover:text-lime-700">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {article.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="text-sm text-slate-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>

          <Link
            to={`/article/${article.id}?url=${encodedUrl}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-lime-700"
          >
            Read more
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}