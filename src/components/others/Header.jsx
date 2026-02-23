import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null)
  }

  const displayName =
    props.data?.role === 'admin'
      ? 'Admin'
      : props.data?.firstName || props.data?.email || 'User'

  const isAdmin = props.data?.role === 'admin'

  return (
    <header className='fade-up' style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 28px',
      borderRadius: 'var(--radius)',
      background: 'linear-gradient(135deg, #0e1117 0%, #111827 100%)',
      border: '1px solid var(--border)',
      boxShadow: isAdmin ? 'var(--glow-gold), inset 0 1px 0 rgba(255,184,0,0.08)' : 'var(--glow-cyan), inset 0 1px 0 rgba(0,212,255,0.08)',
      marginBottom: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: isAdmin
          ? 'linear-gradient(90deg, transparent, var(--gold), transparent)'
          : 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
      }} />

      {/* Left: Avatar + Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: isAdmin
            ? 'linear-gradient(135deg, rgba(255,184,0,0.2), rgba(255,184,0,0.05))'
            : 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))',
          border: `2px solid ${isAdmin ? 'rgba(255,184,0,0.4)' : 'rgba(0,212,255,0.4)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', flexShrink: 0,
          boxShadow: isAdmin ? 'var(--glow-gold)' : 'var(--glow-cyan)',
        }}>
          {isAdmin ? '👑' : '👤'}
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {isAdmin ? 'Administrator' : 'Employee Portal'}
          </p>
          <h1 style={{ margin: '2px 0 0', fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Hello, <span style={{ color: isAdmin ? 'var(--gold)' : 'var(--cyan)' }}>{displayName}</span> 👋
          </h1>
        </div>
      </div>

      {/* Right: Status badge + Logout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          padding: '6px 14px', borderRadius: '99px', fontSize: '12px', fontFamily: 'var(--font-mono)',
          background: isAdmin ? 'var(--gold-dim)' : 'var(--cyan-dim)',
          color: isAdmin ? 'var(--gold)' : 'var(--cyan)',
          border: `1px solid ${isAdmin ? 'rgba(255,184,0,0.3)' : 'rgba(0,212,255,0.3)'}`,
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isAdmin ? 'var(--gold)' : 'var(--cyan)', display: 'inline-block', animation: 'glowPulse 2s infinite' }} />
          {isAdmin ? 'ADMIN' : 'ONLINE'}
        </div>

        <button onClick={logOutUser} style={{
          padding: '8px 20px', borderRadius: 'var(--radius-sm)', fontSize: '13px', fontWeight: 700,
          fontFamily: 'var(--font-main)', cursor: 'pointer', letterSpacing: '0.05em',
          background: 'transparent',
          color: 'var(--red)',
          border: '1px solid rgba(255,77,106,0.35)',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.target.style.background = 'var(--red-dim)'; e.target.style.boxShadow = 'var(--glow-red)' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.boxShadow = 'none' }}
        >
          Logout 🔒
        </button>
      </div>
    </header>
  )
}

export default Header