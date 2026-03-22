import { Container } from '../common/Container'

const footerLinks = [
  { label: 'Focus', targetId: 'focus' },
  { label: 'News', targetId: 'news' },
  { label: 'Newsletter', targetId: 'newsletter' },
]

export function Footer() {
  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
              ASI<span className="text-lime-400">OSO</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              A modern microsite concept focused on digital experience, strategic signals,
              and lightweight brand storytelling.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link.targetId}
                  type="button"
                  onClick={() => scrollToSection(link.targetId)}
                  className="w-fit text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>hello@asioso-demo.com</p>
              <p>Belgrade, Serbia</p>
              <p>Built as a frontend prototype</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 Asioso Microsite. Built for a frontend test task.
        </div>
      </Container>
    </footer>
  )
}