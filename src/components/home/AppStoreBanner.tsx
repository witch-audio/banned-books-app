export function AppStoreBanner() {
  return (
    <section className="relative flex min-h-[clamp(500px,65vh,750px)] items-center overflow-hidden border-b border-foreground/[0.06] bg-surface py-16 sm:py-24">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(250,204,21,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Now Live on iOS
            </p>

            <h2
              className="font-display font-bold uppercase leading-[0.93] tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
            >
              They banned
              <br className="hidden sm:block" /> the books.
              <br />
              <span className="highlight">We made</span> the game.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base text-muted lg:mx-0">
              A daily puzzle: one redacted passage, one banned book.
              Guess the hidden word and discover what they tried to silence.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="https://apps.apple.com/us/app/bannedbooks-game/id6761286916"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-foreground/20 bg-foreground/[0.04] px-5 py-3.5 transition-all duration-200 hover:border-accent/50 hover:bg-foreground/[0.07]"
              >
                {/* Apple logo */}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-shrink-0 fill-foreground transition-colors duration-200 group-hover:fill-accent"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    Download on the
                  </p>
                  <p className="font-display text-lg font-bold leading-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                    App Store
                  </p>
                </div>
              </a>

              <p className="self-center text-xs text-muted">Free · New puzzle daily</p>
            </div>
          </div>

          {/* ── Right: phone mockup ── */}
          <div className="flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div
      className="animate-phone-float relative"
      style={{ width: 'clamp(200px, 24vw, 280px)' }}
    >
      {/* Glow beneath */}
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2"
        style={{
          width: '60%',
          height: '60px',
          background: 'radial-gradient(ellipse, rgba(250,204,21,0.35) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      <img
        src="/iphone-screenshot.png"
        alt="BannedBooks app screenshot showing a daily puzzle"
        width={1284}
        height={2778}
        className="relative w-full drop-shadow-2xl"
      />
    </div>
  )
}
