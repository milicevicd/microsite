import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Play, TrendingUp } from "lucide-react";

type HeroSectionProps = {
  onWatchVideo: () => void;
};

export function HeroSection({ onWatchVideo }: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(16,185,129,0.12),transparent_22%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <TrendingUp className="h-4 w-4 text-lime-400" />
              <span>Digital agency microsite</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We create digital experiences that keep brands relevant.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From strategy to execution, we help brands move faster, communicate clearly,
              and stay connected to the trends shaping their audience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                className="min-w-[160px]"
                onClick={() => {
                  document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore trends
              </Button>

              <Button variant="secondary" className="min-w-[160px]" onClick={onWatchVideo}>
                <Play className="mr-2 h-4 w-4" />
                Watch video
              </Button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">120+</p>
                <p className="mt-1 text-sm text-slate-300">digital campaigns launched</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-300">trend monitoring mindset</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-white">3x</p>
                <p className="mt-1 text-sm text-slate-300">faster insight delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-lime-400/20 blur-3xl lg:block" />
            <div className="absolute -right-10 bottom-0 hidden h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative team collaborating in a modern digital studio"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
                      Built for momentum
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      Turning signals, stories, and strategy into digital growth.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      A flexible microsite concept for brands that want to communicate clearly
                      and move with the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    )
}