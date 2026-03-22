import { newsCategories, type NewsCategory } from '../../data/newsCategories'
import { cn } from '../../utils/cn'

type NewsTabsProps = {
  activeCategory: NewsCategory
  onChange: (category: NewsCategory) => void
}

export function NewsTabs({ activeCategory, onChange }: NewsTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {newsCategories.map((category) => {
        const isActive = activeCategory === category.value

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onChange(category.value)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-slate-950 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900',
            )}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}