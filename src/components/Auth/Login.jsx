import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [focused, setFocused] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '12px 16px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'rgba(0,212,255,0.6)' : 'rgba(255,255,255,0.1)'}`,
    boxShadow: focused === field ? '0 0 0 3px rgba(0,212,255,0.12)' : 'none',
    color: '#f0f4ff', fontSize: '14px',
    fontFamily: "'Syne', sans-serif",
    outline: 'none', transition: 'all 0.2s ease',
  })

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 30% 40%, #0d1420 0%, #07080d 70%)',
      fontFamily: "'Syne', sans-serif",
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient orbs */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{
        width: '420px', padding: '44px 40px',
        background: 'linear-gradient(145deg, #0e1117, #0a0d14)',
        border: '1px solid rgba(0,212,255,0.15)',
        borderRadius: '20px',
        boxShadow: '0 0 60px rgba(0,212,255,0.08), 0 24px 80px rgba(0,0,0,0.6)',
        position: 'relative', overflow: 'hidden',
        animation: 'fadeUp 0.6s ease both',
      }}>
        {/* Top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00d4ff 40%, #ffb800 60%, transparent)' }} />

        {/* Logo / Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px', margin: '0 auto 16px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(255,184,0,0.1))',
            border: '1px solid rgba(0,212,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
            boxShadow: '0 0 20px rgba(0,212,255,0.2)',
          }}>
            ⚡
          </div>
          <h1 style={{ margin: '0 0 6px', fontSize: '26px', fontWeight: 800, color: '#f0f4ff', letterSpacing: '-0.02em' }}>
            WorkFlow
          </h1>
          <p style={{ margin: 0, fontSize: '13px', color: '#8892a4', fontFamily: "'JetBrains Mono', monospace" }}>
            Employee Management System
          </p>
        </div>

        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8892a4', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>
              Email Address
            </label>
            <input
              value={email} onChange={e => setEmail(e.target.value)}
              style={inputStyle('email')} type="email" placeholder="you@example.com"
              required onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8892a4', fontFamily: "'JetBrains Mono', monospace", marginBottom: '8px' }}>
              Password
            </label>
            <input
              value={password} onChange={e => setPassword(e.target.value)}
              style={inputStyle('password')} type="password" placeholder="••••••••"
              required onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}
            />
          </div>

          <button type="submit" style={{
            marginTop: '8px', padding: '13px', borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.08))',
            border: '1px solid rgba(0,212,255,0.45)',
            color: '#00d4ff', fontSize: '14px', fontWeight: 800,
            fontFamily: "'Syne', sans-serif", cursor: 'pointer',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.target.style.background = 'rgba(0,212,255,0.25)'; e.target.style.boxShadow = '0 0 24px rgba(0,212,255,0.3)' }}
            onMouseLeave={e => { e.target.style.background = 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.08))'; e.target.style.boxShadow = 'none' }}
          >
            Sign In →
          </button>
        </form>

        {/* Hint */}
        <div style={{ marginTop: '24px', padding: '14px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ margin: '0 0 6px', fontSize: '11px', color: '#4a5568', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>DEMO CREDENTIALS</p>
          <p style={{ margin: '2px 0', fontSize: '12px', color: '#8892a4', fontFamily: "'JetBrains Mono', monospace" }}>
            Admin: <span style={{ color: '#ffb800' }}>admin@me.com</span> / <span style={{ color: '#ffb800' }}>123</span>
          </p>
          <p style={{ margin: '2px 0', fontSize: '12px', color: '#8892a4', fontFamily: "'JetBrains Mono', monospace" }}>
            Employee: <span style={{ color: '#00d4ff' }}>ali.khan@example.com</span> / <span style={{ color: '#00d4ff' }}>123</span>
          </p>
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }`}</style>
    </div>
  );
};

export default Login;