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
    if (resumeOpen || menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [resumeOpen, menuOpen])

  const menuLinkStyle = {
    fontSize: '24px',
    fontWeight: 400,
    color: '#ffffff',
    textDecoration: 'none',
    display: 'block',
    padding: '20px 0',
    width: '100%',
  } as const

  const dividerStyle = {
    borderBottom: '0.5px solid rgba(255,255,255,0.2)',
  } as const

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
        {/* Inner wrapper */}
        <div
          style={{
            maxWidth: '1440px',
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

          {/* Mobile hamburger / close button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 151,
              position: 'relative' as const,
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="nav-mobile-btn"
          >
            {menuOpen ? (
              <span style={{ color: '#ffffff', fontSize: '24px', lineHeight: 1, display: 'block' }}>×</span>
            ) : (
              <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#ffffff' }} />
                ))}
              </span>
            )}
          </button>
        </div>

        <style>{`
          .nav-link {
            font-size: 15px;
            font-weight: 400;
            color: #ffffff;
            text-decoration: none;
            letter-spacing: 0;
            transition: color 0.2s ease;
            white-space: nowrap;
          }
          .nav-link:hover { color: #aaaaaa; }
          .nav-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            font-family: inherit;
          }
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile menu — full-page modal */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column' as const,
            paddingTop: '72px',
            paddingLeft: 'var(--page-margin)',
            paddingRight: 'var(--page-margin)',
            overflowY: 'auto',
          }}
        >
          <div style={dividerStyle}>
            <Link
              href={isHome ? '#work' : '/#work'}
              style={menuLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
          </div>
          <div style={dividerStyle}>
            <Link
              href={isHome ? '#about' : '/#about'}
              style={menuLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div style={dividerStyle}>
            <button
              onClick={() => { setMenuOpen(false); setResumeOpen(true) }}
              style={{ ...menuLinkStyle, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' as const }}
            >
              Resume
            </button>
          </div>
          <div style={dividerStyle}>
            <a
              href="https://dribbble.com/joshymoony"
              target="_blank"
              rel="noopener noreferrer"
              style={menuLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Dribbble
            </a>
          </div>
          <div style={dividerStyle}>
            <a
              href="https://www.behance.net/jjmoon11220aed"
              target="_blank"
              rel="noopener noreferrer"
              style={menuLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Daily UI
            </a>
          </div>
        </div>
      )}

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
