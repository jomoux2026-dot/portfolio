import React from 'react'

interface StrengthCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function StrengthCard({ title, description, icon }: StrengthCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#111111',
        border: '1px solid #1e1e1e',
        borderRadius: '6px',
        padding: '28px 32px',
        height: '100%',
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
      }}
    >
      {icon && (
        <div style={{ color: '#aaaaaa', marginBottom: '18px', lineHeight: 0 }}>
          {icon}
        </div>
      )}
      <h3 style={{
        fontSize: '15px',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '13px',
        fontWeight: 300,
        color: '#aaaaaa',
        lineHeight: 1.7,
      }}>
        {description}
      </p>
    </div>
  )
}
