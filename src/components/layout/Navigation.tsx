'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (resumeOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [resumeOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '72px',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid #111111' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Inner wrapper — matches content max-width and margins */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 'var(--page-margin)',
            paddingRight: 'var(--page-margin)',
            boxSizing: 'border-box' as const,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '0',
            }}
          >
            jomoux.
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="nav-desktop">
            <Link href={isHome ? '#work' : '/#work'} className="nav-link">Work</Link>
            <Link href={isHome ? '#about' : '/#about'} className="nav-link">About</Link>
            <button onClick={() => setResumeOpen(true)} className="nav-link nav-btn">Resume</button>
            <a href="https://dribbble.com/joshymoony" target="_blank" rel="noopener noreferrer" className="nav-link">Dribbble</a>
            <a href="https://www.behance.net/jjmoon11220aed" target="_blank" rel="noopener noreferrer" className="nav-link">Daily UI</a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              flexDirection: 'column' as const,
              gap: '5px',
            }}
            aria-label="Toggle menu"
            className="nav-mobile-btn"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#ffffff' }} />
            ))}
          </button>
        </div>

        {/* Mobile menu — position: fixed, lives outside the inner wrapper */}
        {menuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(10px)',
              paddingTop: '32px',
              paddingBottom: '32px',
              paddingLeft: 'var(--page-margin)',
              paddingRight: 'var(--page-margin)',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '24px',
              borderBottom: '1px solid #111111',
            }}
          >
            <Link href={isHome ? '#work' : '/#work'} style={{ fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Work</Link>
            <Link href={isHome ? '#about' : '/#about'} style={{ fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>About</Link>
            <button onClick={() => { setMenuOpen(false); setResumeOpen(true) }} style={{ fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' as const }}>Resume</button>
            <a href="https://dribbble.com/joshymoony" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Dribbble</a>
            <a href="https://www.behance.net/jjmoon11220aed" target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Daily UI</a>
          </div>
        )}

        <style>{`
          .nav-link {
            font-size: 15px;
            font-weight: 400;
            color: #ffffff;
            text-decoration: none;
            letter-spacing: 0;
            transition: color 0.2s ease;
          }
          .nav-link:hover { color: #aaaaaa; }
          .nav-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            font-family: inherit;
          }
          @media (max-width: 640px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Resume overlay */}
      {resumeOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflowY: 'auto',
            padding: '80px 20px 40px',
          }}
        >
          {/* Toolbar */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '64px',
              backgroundColor: 'rgba(0,0,0,0.96)',
              borderBottom: '1px solid #1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: '24px',
              paddingRight: '24px',
              zIndex: 201,
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 400, color: '#aaaaaa', letterSpacing: '0.05em' }}>
              Resume
            </span>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a
                href="/images/resume.png"
                download="Josh-Moon-Resume.png"
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  border: '1px solid #333',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                Download
              </a>
              <button
                onClick={() => window.print()}
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  background: 'none',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease',
                }}
              >
                Print
              </button>
              <button
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#aaaaaa',
                  fontSize: '24px',
                  lineHeight: 1,
                  padding: '4px 8px',
                  marginLeft: '8px',
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Resume image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/resume.png"
            alt="Josh Moon Resume"
            style={{
              maxWidth: '900px',
              width: '100%',
              display: 'block',
              borderRadius: '4px',
              boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      )}
    </>
  )
}
