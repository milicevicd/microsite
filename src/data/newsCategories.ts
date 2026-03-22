export const newsCategories = [
  { label: 'All', value: 'all' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Experience', value: 'experience' },
  { label: 'Growth', value: 'growth' },
] as const

export type NewsCategory = (typeof newsCategories)[number]['value']