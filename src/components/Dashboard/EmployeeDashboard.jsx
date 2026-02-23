import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/Tasklistnumber'
import TaskList from '../Tasklist/Tasklist'
import { Authcontext } from '../../context/Authcontext'

const EmployeeDashboard = (props) => {
  const [userData] = useContext(Authcontext)

  const freshData = userData?.employees?.find(
    (emp) => emp.id === props.data?.id
  ) || props.data

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: 'radial-gradient(ellipse at 80% 10%, #0d1a20 0%, #07080d 60%)',
      padding: '28px 36px',
      fontFamily: 'var(--font-main)',
    }}>
      {/* Ambient glow orbs */}
      <div style={{
        position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, borderRadius: '50%',
      }} />
      <div style={{
        position: 'fixed', bottom: '-15%', left: '-8%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,229,160,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, borderRadius: '50%',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header changeUser={props.changeUser} data={freshData} />
        <TaskListNumber data={freshData} />
        <TaskList data={freshData} />
      </div>
    </div>
  )
}

export default EmployeeDashboard