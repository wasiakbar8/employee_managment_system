import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/Createtask'
import AllTask from '../others/Alltask'

const AdminDashboard = (props) => {
  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: 'radial-gradient(ellipse at 20% 20%, #0d1420 0%, #07080d 60%)',
      padding: '28px 36px',
      fontFamily: 'var(--font-main)',
    }}>
      {/* Ambient glow orbs */}
      <div style={{
        position: 'fixed', top: '-15%', left: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(255,184,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, borderRadius: '50%',
      }} />
      <div style={{
        position: 'fixed', bottom: '-10%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, borderRadius: '50%',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard