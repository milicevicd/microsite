import { ArrowUpRight } from "lucide-react"
import type { FocusItem } from "../../data/focusItemts"

type FocusCardProps = {
  item: FocusItem
}

export function FocusCard({ item }: FocusCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 opacity-80" />

      <div className="flex h-full flex-col">
        <div className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          {item.stat}
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            {item.title}
          </h3>

          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <span className="text-sm font-medium text-slate-900">
            Strategic focus area
          </span>
        </div>
      </div>
    </article>
  )
}