import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

const Alltask = () => {
  const [userData] = useContext(Authcontext)
  const employees = userData?.employees || []

  const cols = [
    { label: 'Employee', color: 'var(--text-primary)' },
    { label: 'New', color: 'var(--cyan)' },
    { label: 'Active', color: 'var(--yellow)' },
    { label: 'Completed', color: 'var(--green)' },
    { label: 'Failed', color: 'var(--red)' },
  ]

  return (
    <div className='fade-up-2' style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px',
      marginTop: '24px',
    }}>
      {/* Section title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          width: '4px', height: '24px', borderRadius: '2px',
          background: 'linear-gradient(180deg, var(--gold), transparent)',
        }} />
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Team Overview
        </h2>
        <div style={{
          marginLeft: 'auto', padding: '3px 10px', borderRadius: '99px', fontSize: '11px',
          fontFamily: 'var(--font-mono)', color: 'var(--gold)',
          background: 'var(--gold-dim)', border: '1px solid rgba(255,184,0,0.2)',
        }}>
          {employees.length} members
        </div>
      </div>

      {/* Header row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
        padding: '10px 16px', marginBottom: '8px',
        background: 'rgba(255,184,0,0.05)',
        border: '1px solid rgba(255,184,0,0.1)',
        borderRadius: 'var(--radius-sm)',
      }}>
        {cols.map((col, i) => (
          <span key={i} style={{
            fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono)',
            color: col.color, letterSpacing: '0.1em', textTransform: 'uppercase',
            opacity: i === 0 ? 0.7 : 1,
          }}>
            {col.label}
          </span>
        ))}
      </div>

      {/* Employee rows */}
      {employees.map((emp, idx) => (
        <div key={idx} style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          padding: '14px 16px',
          marginBottom: '6px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          transition: 'border-color 0.2s, background 0.2s',
          cursor: 'default',
          animation: `fadeUp 0.4s ${idx * 0.05}s ease both`,
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'
            e.currentTarget.style.background = 'rgba(0,212,255,0.03)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
          }}
        >
          {/* Name + avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: `hsl(${idx * 60}, 40%, 20%)`,
              border: `1px solid hsl(${idx * 60}, 60%, 35%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '13px', fontWeight: 700, color: `hsl(${idx * 60}, 80%, 70%)`,
            }}>
              {emp.firstName?.[0]}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{emp.firstName}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{emp.email}</div>
            </div>
          </div>

          {/* Task counts */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
              {emp.taskCounts.newTask}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--yellow)', fontFamily: 'var(--font-mono)' }}>
              {emp.taskCounts.active}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>
              {emp.taskCounts.completed}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>
              {emp.taskCounts.failed}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Alltask