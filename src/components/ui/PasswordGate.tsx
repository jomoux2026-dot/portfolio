'use client'

import { useEffect, useState } from 'react'

const SESSION_KEY = 'cs-insider-trading-unlocked'
const CORRECT_PIN = '1109'

const LockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

interface PasswordGateProps {
  children: React.ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [checking, setChecking] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [pin, setPin] = useState('')
  const [showPin, setShowPin] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY) === 'true'
    setUnlocked(stored)
    setChecking(false)
  }, [])

  const handleSubmit = () => {
    if (pin === CORRECT_PIN) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setTimeout(() => {
        setPin('')
        setError(false)
      }, 1200)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && pin.length === 4) handleSubmit()
  }

  if (checking) {
    return <div style={{ minHeight: '100vh', backgroundColor: '#000' }} />
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
        }}
      >
        {/* Lock icon */}
        <div style={{ color: '#aaaaaa', marginBottom: '24px' }}>
          <LockIcon />
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '10px',
          letterSpacing: '-0.01em',
          textAlign: 'center' as const,
        }}>
          Enter Password
        </h2>

        {/* Subtitle line 1 */}
        <p style={{
          fontSize: '14px',
          fontWeight: 300,
          color: '#aaaaaa',
          lineHeight: 1.5,
          textAlign: 'center' as const,
          marginBottom: '4px',
        }}>
          This case study is an unreleased product.
        </p>

        {/* Subtitle line 2 — caption size */}
        <p style={{
          fontSize: '12px',
          fontWeight: 300,
          color: '#666666',
          lineHeight: 1.5,
          textAlign: 'center' as const,
          marginBottom: '32px',
        }}>
          Reach out to Josh Moon for the pin @{' '}
          <a
            href="mailto:jomoux2026@gmail.com"
            style={{ color: '#888888', textDecoration: 'none', borderBottom: '1px solid #333' }}
          >
            jomoux2026@gmail.com
          </a>
        </p>

        {/* Input row */}
        <div style={{ position: 'relative' as const, width: '100%', marginBottom: '8px' }}>
          <input
            type={showPin ? 'text' : 'password'}
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={(e) => {
              setError(false)
              const val = e.target.value.replace(/\D/g, '').slice(0, 4)
              setPin(val)
            }}
            onKeyDown={handleKeyDown}
            placeholder="••••"
            autoFocus
            style={{
              width: '100%',
              padding: '10px 44px 10px 14px',
              fontSize: '20px',
              letterSpacing: '0.25em',
              fontFamily: 'inherit',
              backgroundColor: '#0d0d0d',
              border: `1px solid ${error ? '#e53e3e' : '#2a2a2a'}`,
              borderRadius: '6px',
              color: '#ffffff',
              outline: 'none',
              boxSizing: 'border-box' as const,
              textAlign: 'left' as const,
              caretColor: '#ffffff',
              transition: 'border-color 0.15s ease',
            }}
          />
          {/* Show / hide toggle */}
          <button
            type="button"
            onClick={() => setShowPin(!showPin)}
            aria-label={showPin ? 'Hide password' : 'Show password'}
            style={{
              position: 'absolute' as const,
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#666666',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showPin ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Error message */}
        <p style={{
          fontSize: '12px',
          fontWeight: 400,
          color: '#e53e3e',
          height: '18px',
          marginBottom: '16px',
          alignSelf: 'flex-start' as const,
          opacity: error ? 1 : 0,
          transition: 'opacity 0.15s ease',
        }}>
          Incorrect Password
        </p>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={pin.length !== 4}
          style={{
            width: '100%',
            padding: '11px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            fontFamily: 'inherit',
            backgroundColor: pin.length === 4 ? '#ffffff' : '#1a1a1a',
            color: pin.length === 4 ? '#000000' : '#444444',
            border: 'none',
            borderRadius: '4px',
            cursor: pin.length === 4 ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.15s ease, color 0.15s ease',
          }}
        >
          UNLOCK
        </button>
      </div>
    </div>
  )
}
