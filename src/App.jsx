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
const INSTAGRAM_URL = 'https://www.instagram.com/alfiansyah.achmad/'

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

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
      <div className="flex items-center gap-2 font-mono text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
        <TerminalIcon className="w-4 h-4 text-kotlin-purple" />
        <span className="kotlin-gradient-text font-semibold">Achmad Alfiansyah</span>
      </div>
      <span className="font-sans text-xs md:text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
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
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Build Progress</span>
        <span
          className="font-mono text-xs font-semibold"
          style={{ color: hasError ? '#EF4444' : 'var(--text-secondary)' }}
        >
          {progress}%
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${hasError ? 'progress-bar-error' : 'progress-bar-gradient'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

/* ─── Terminal Window ─── */
function TerminalWindow({ logs, hasError }) {
  return (
    <div
      className="w-full max-w-lg mx-auto rounded-xl overflow-hidden"
      style={{
        border: hasError ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid var(--border-subtle)',
        ...(hasError ? {} : {}),
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
        </div>
        <span className="font-mono text-xs ml-2" style={{ color: 'var(--text-muted)' }}>terminal — build</span>
      </div>

      {/* Terminal body */}
      <div
        className={`p-4 min-h-[140px] md:min-h-[180px] font-mono text-xs md:text-sm leading-relaxed ${hasError ? 'error-flash-bg' : ''}`}
        style={{ backgroundColor: 'var(--bg-terminal)' }}
      >
        {logs.length === 0 && (
          <div className="flex items-center" style={{ color: 'var(--text-muted)' }}>
            <span className="mr-2 text-kotlin-purple">$</span>
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
              className="animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.05}s`,
                color: isError ? '#EF4444' : 'var(--text-terminal)',
                fontWeight: isError ? 700 : 400,
              }}
            >
              <span className="mr-2" style={{ color: isError ? '#EF4444' : '#7F52FF' }}>
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
      style={{ border: 'none', background: 'none', padding: 0 }}
    >
      <div
        className="px-8 py-3.5 md:px-10 md:py-4 rounded-xl transition-colors duration-200"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
      >
        <span className="font-mono text-sm md:text-base font-semibold flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
          <span className="text-kotlin-purple">▶</span>
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
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backgroundColor: 'var(--bg-card)',
        }}
      >
        {/* Error header */}
        <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
            >
              <span style={{ color: '#EF4444', fontSize: '1.125rem' }}>✗</span>
            </div>
            <div>
              <h2 className="font-mono text-base md:text-lg font-bold" style={{ color: '#EF4444' }}>
                Build Failed
              </h2>
              <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                ERROR 503
              </p>
            </div>
          </div>
        </div>

        {/* Error body */}
        <div className="p-6">
          <p className="font-sans text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
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
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 no-underline"
              style={{ backgroundColor: '#0A66C2', color: '#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004182'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A66C2'}
            >
              <LinkedInIcon className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              id="cta-github"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 no-underline"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--border-subtle)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
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
    <footer className="px-6 py-5 md:px-10 md:py-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2026 Achmad Alfiansyah
        </p>
        <div className="flex items-center gap-5">
          {[
            { id: 'footer-linkedin', href: LINKEDIN_URL, label: 'LinkedIn', Icon: LinkedInIcon },
            { id: 'footer-github', href: GITHUB_URL, label: 'GitHub', Icon: GitHubIcon },
            { id: 'footer-instagram', href: INSTAGRAM_URL, label: 'Instagram', Icon: InstagramIcon },
          ].map(({ id, href, label, Icon }) => (
            <a
              key={id}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
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
    color: ['#7F52FF', '#E32F65', '#F88909'][i % 3],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            opacity: 0.2,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: `blur(${p.size / 2}px)`,
          }}
        />
      ))}
      {/* Subtle gradient orbs */}
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, #7F52FF, transparent 70%)',
          opacity: 0.03,
          top: '10%',
          right: '-5%',
        }}
      />
      <div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, #F88909, transparent 70%)',
          opacity: 0.03,
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

      <div className={`relative flex flex-col ${isShaking ? 'animate-shake' : ''}`} style={{ zIndex: 10, minHeight: '100vh' }}>
        <Header />

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 md:py-12 gap-8 md:gap-10">
          {/* Title Section */}
          <div className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight">
              <span className="kotlin-gradient-text">Coming soon...</span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Engineering scalable mobile architectures for your most complex challenges.
            </p>
          </div>

          {/* Build Simulator */}
          <div className="w-full max-w-lg" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
