import React from 'react'

const statCards = [
  { key: 'newTask',   label: 'New Tasks',       icon: '📋', color: 'var(--cyan)',   glow: 'var(--glow-cyan)',   dim: 'var(--cyan-dim)',   border: 'rgba(0,212,255,0.3)' },
  { key: 'active',    label: 'In Progress',     icon: '⚡', color: 'var(--yellow)', glow: 'var(--glow-cyan)',   dim: 'var(--yellow-dim)', border: 'rgba(255,209,102,0.3)' },
  { key: 'completed', label: 'Completed',       icon: '✅', color: 'var(--green)',  glow: 'var(--glow-green)',  dim: 'var(--green-dim)',  border: 'rgba(0,229,160,0.3)' },
  { key: 'failed',    label: 'Failed',          icon: '❌', color: 'var(--red)',    glow: 'var(--glow-red)',    dim: 'var(--red-dim)',    border: 'rgba(255,77,106,0.3)' },
]

const TaskListNumber = ({ data }) => {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px', marginTop: '24px',
    }}>
      {statCards.map((card, i) => (
        <div key={i} className={`fade-up-${i + 1}`} style={{
          background: 'var(--bg-card)',
          border: `1px solid ${card.border}`,
          borderRadius: 'var(--radius)',
          padding: '20px 24px',
          position: 'relative', overflow: 'hidden',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = card.glow }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          {/* Background accent */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '4px',
            background: `linear-gradient(180deg, ${card.color}, transparent)`,
          }} />
          <div style={{
            position: 'absolute', bottom: '-20px', right: '10px',
            fontSize: '60px', opacity: 0.06, userSelect: 'none',
          }}>
            {card.icon}
          </div>

          <div style={{ fontSize: '28px', marginBottom: '4px' }}>{card.icon}</div>
          <div style={{
            fontSize: '40px', fontWeight: 800, color: card.color,
            fontFamily: 'var(--font-mono)', lineHeight: 1,
            marginBottom: '8px',
          }}>
            {String(data?.taskCounts?.[card.key] ?? 0).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {card.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber