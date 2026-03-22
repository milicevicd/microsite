import { type FormEvent, useState } from 'react'
import { Mail } from 'lucide-react'
import { Container } from '../common/Container'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      setSuccess('')
      setError('Please enter your email address.')
      return
    }

    if (!isValidEmail(email)) {
      setSuccess('')
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSuccess('Thanks for subscribing. This is a UI-only demo flow.')
    setEmail('')
  }

  return (
    <section id="newsletter" className="bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-lime-400 via-lime-300 to-emerald-300 p-[1px] shadow-2xl">
          <div className="rounded-[calc(2rem-1px)] bg-slate-950 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  <Mail className="h-4 w-4 text-lime-400" />
                  <span>Newsletter signup</span>
                </div>

                <h2 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get curated signals on brand, experience, and digital momentum.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Subscribe for a lightweight digest of trends, ideas, and digital signals
                  relevant to modern brand teams.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <label htmlFor="newsletter-email" className="text-sm font-medium text-slate-200">
                    Email address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-lime-400 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300 cursor-pointer"
                  >
                    Subscribe
                  </button>

                  {error ? (
                    <p className="text-sm text-red-300">{error}</p>
                  ) : null}

                  {success ? (
                    <p className="text-sm text-lime-300">{success}</p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}