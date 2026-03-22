type NewsErrorStateProps = {
  onRetry: () => void
}

export function NewsErrorState({ onRetry }: NewsErrorStateProps) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
      <h3 className="text-xl font-semibold text-slate-900">Unable to load news right now</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        The live feed could not be loaded. Please try again.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Try again
      </button>
    </div>
  )
}

export function NewsEmptyState() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
      <h3 className="text-xl font-semibold text-slate-900">No articles found</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        There are no articles available for the selected category right now.
      </p>
    </div>
  )
}