import { useState, useCallback } from 'react'

const BUILD_LOGS = [
  '1/5 - Initializing React application build pipeline...',
  '2/5 - Resolving dependency tree and bundling assets...',
  '3/5 - Compiling Tailwind CSS utility classes...',
  '4/5 - Generating static HTML pages (SSG)...',
  '5/5 - Preparing Edge network deployment...',
]

const LINKEDIN_URL = 'https://linkedin.com/in/achmad-alfiansyah'
const GITHUB_URL = 'https://github.com/alfiyansya'
const STACKOVERFLOW_URL = 'https://stackoverflow.com/users/22112837/alfiyansyah'

/* ─── SVG Icons ─── */
function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function StackOverflowIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z" />
    </svg>
  )
}

function TerminalIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

/* ─── Header ─── */
function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
      <div className="flex items-center gap-2 font-mono text-sm md:text-base text-[var(--color-text-secondary)]">
        <TerminalIcon className="w-4 h-4 text-[var(--color-kotlin-purple)]" />
        <span className="kotlin-gradient-text font-semibold">Achmad Alfiansyah</span>
      </div>
      <span className="font-sans text-xs md:text-sm tracking-widest uppercase text-[var(--color-text-muted)]">
        Mobile Engineer
      </span>
    </header>
  )
}

/* ─── Progress Bar ─── */
function ProgressBar({ progress, hasError }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-[var(--color-text-muted)]">Build Progress</span>
        <span className={`font-mono text-xs font-semibold ${hasError ? 'text-[var(--color-error-red)]' : 'text-[var(--color-text-secondary)]'}`}>
          {progress}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${hasError ? 'progress-bar-error' : 'progress-bar-gradient'
            }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

/* ─── Terminal Window ─── */
function TerminalWindow({ logs, hasError }) {
  return (
    <div className={`w-full max-w-lg mx-auto rounded-xl overflow-hidden border ${hasError ? 'border-[var(--color-error-red)]/40 error-flash-bg' : 'border-[var(--color-border-subtle)]'
      }`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border-subtle)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-xs text-[var(--color-text-muted)] ml-2">terminal — build</span>
      </div>

      {/* Terminal body */}
      <div className="bg-[var(--color-bg-terminal)] p-4 min-h-[140px] md:min-h-[180px] font-mono text-xs md:text-sm leading-relaxed">
        {logs.length === 0 && (
          <div className="flex items-center text-[var(--color-text-muted)]">
            <span className="text-[var(--color-kotlin-purple)] mr-2">$</span>
            <span>Awaiting build command...</span>
            <span className="terminal-cursor" />
          </div>
        )}
        {logs.map((log, i) => {
          const isError = hasError && log.startsWith('ERROR')
          const isLast = i === logs.length - 1
          return (
            <div
              key={i}
              className={`animate-fade-in-up ${isError
                ? 'text-[var(--color-error-red)] font-bold'
                : 'text-[var(--color-text-terminal)]'
                }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className={`mr-2 ${isError ? 'text-[var(--color-error-red)]' : 'text-[var(--color-kotlin-purple)]'}`}>
                {isError ? '✗' : '›'}
              </span>
              {log}
              {isLast && !hasError && <span className="terminal-cursor" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Build Button ─── */
function BuildButton({ onClick, step }) {
  return (
    <button
      id="build-button"
      onClick={onClick}
      className="kotlin-gradient-border rounded-xl cursor-pointer active:scale-95 transition-transform duration-100"
    >
      <div className="px-8 py-3.5 md:px-10 md:py-4 rounded-xl bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors duration-200">
        <span className="font-mono text-sm md:text-base font-semibold text-[var(--color-text-primary)] flex items-center gap-3">
          <span className="text-[var(--color-kotlin-purple)]">▶</span>
          {step === 0 ? 'Click to build the website' : `Building... (${step}/5)`}
        </span>
      </div>
    </button>
  )
}

/* ─── Error Card ─── */
function ErrorCard() {
  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in-up">
      <div className="rounded-2xl border border-[var(--color-error-red)]/30 bg-[var(--color-bg-card)] overflow-hidden shadow-2xl shadow-red-900/10">
        {/* Error header */}
        <div className="px-6 pt-6 pb-4 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-error-red)]/10 flex items-center justify-center">
              <span className="text-[var(--color-error-red)] text-lg">✗</span>
            </div>
            <div>
              <h2 className="font-mono text-base md:text-lg font-bold text-[var(--color-error-red)]">
                Build Failed
              </h2>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">
                ERROR 503
              </p>
            </div>
          </div>
        </div>

        {/* Error body */}
        <div className="p-6">
          <p className="font-sans text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
            The portfolio website is still under active development. In the meantime, please connect with{' '}
            <span className="kotlin-gradient-text font-semibold">Achmad Alfiansyah</span>{' '}
            via LinkedIn or inspect his source code on GitHub.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              id="cta-linkedin"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 no-underline"
            >
              <LinkedInIcon className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              id="cta-github"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 no-underline"
            >
              <GitHubIcon className="w-5 h-5" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="px-6 py-5 md:px-10 md:py-6 border-t border-[var(--color-border-subtle)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-[var(--color-text-muted)]">
          © 2026 Achmad Alfiansyah
        </p>
        <div className="flex items-center gap-5">
          <a
            id="footer-linkedin"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            id="footer-github"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            id="footer-stackoverflow"
            href={STACKOVERFLOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            aria-label="Stack Overflow"
          >
            <StackOverflowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─── Floating Particles (Background Decoration) ─── */
function FloatingParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 3,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
    color: ['var(--color-kotlin-purple)', 'var(--color-kotlin-magenta)', 'var(--color-kotlin-orange)'][i % 3],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: `blur(${p.size / 2}px)`,
          }}
        />
      ))}
      {/* Subtle gradient orbs */}
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #7F52FF, transparent 70%)',
          top: '10%',
          right: '-5%',
        }}
      />
      <div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #F88909, transparent 70%)',
          bottom: '15%',
          left: '-3%',
        }}
      />
    </div>
  )
}

/* ─── Main App ─── */
export default function App() {
  const [step, setStep] = useState(0)
  const [logs, setLogs] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const progress = step * 20

  const handleBuildClick = useCallback(() => {
    if (step >= 5) return

    const nextStep = step + 1
    setStep(nextStep)
    setLogs((prev) => [...prev, BUILD_LOGS[nextStep - 1]])

    if (nextStep === 5) {
      // After a brief pause, trigger the error state
      setTimeout(() => {
        setHasError(true)
        setIsShaking(true)
        setLogs((prev) => [...prev, 'ERROR 503: Portfolio Under Construction.'])
        setTimeout(() => setIsShaking(false), 500)
      }, 800)
    }
  }, [step])

  return (
    <>
      <FloatingParticles />

      <div className="relative z-10 flex flex-col min-h-dvh">
        <Header />

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 md:py-12 gap-8 md:gap-10">
          {/* Title Section */}
          <div className="text-center space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight">
              <span className="kotlin-gradient-text">Coming soon...</span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
              Engineering scalable mobile architectures for your most complex challenges.
            </p>
          </div>

          {/* Build Simulator */}
          <div className={`w-full max-w-lg space-y-6 ${isShaking ? 'animate-shake' : ''}`}>
            {/* Button */}
            {!hasError && (
              <div className="flex justify-center">
                <BuildButton onClick={handleBuildClick} step={step} />
              </div>
            )}

            {/* Progress Bar */}
            <ProgressBar progress={progress} hasError={hasError} />

            {/* Terminal */}
            <TerminalWindow logs={logs} hasError={hasError} />

            {/* Error Card (replaces button after error) */}
            {hasError && <ErrorCard />}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
