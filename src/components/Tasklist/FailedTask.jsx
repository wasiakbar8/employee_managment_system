import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div style={{
      flexShrink: 0, width: '280px',
      background: 'linear-gradient(145deg, #1a0a0e, #120608)',
      border: '1px solid rgba(255,77,106,0.2)',
      borderRadius: 'var(--radius)', padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '12px',
      position: 'relative', overflow: 'hidden',
      opacity: 0.85,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--red), transparent)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono)', background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid rgba(255,77,106,0.3)' }}>
          {data.category}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{data.taskDate}</span>
      </div>

      <div>
        <div style={{ fontSize: '11px', color: 'var(--red)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '4px' }}>FAILED</div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, opacity: 0.5 }}>{data.taskTitle}</h3>
      </div>

      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>{data.taskDescription}</p>

      <div style={{
        padding: '8px', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontSize: '12px', fontWeight: 700,
        background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid rgba(255,77,106,0.3)',
        letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
      }}>
        ❌ Failed
      </div>
    </div>
  )
}

export default FailedTask