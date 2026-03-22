import { useEffect, useState } from 'react'
import { Container } from '../common/Container'
import { cn } from '../../utils/cn'

const navItems = [
  { label: 'Focus', targetId: 'focus' },
  { label: 'News', targetId: 'news' },
  { label: 'Newsletter', targetId: 'newsletter' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/75 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          : 'bg-slate-950/95',
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('top')}
          className="group inline-flex items-center gap-2"
          aria-label="Go to top of page"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.55)] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm font-semibold uppercase tracking-[0.38em] text-white/95 transition group-hover:text-white">
            ASI<span className="text-lime-400">OSO</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200',
                'hover:bg-white/10 hover:text-white',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  )
}