import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

const NewTask = ({ data, employeeId }) => {
  const [userData, setUserData] = useContext(Authcontext)

  const acceptTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle && task.newTask === true) {
            return { ...task, newTask: false, active: true }
          }
          return task
        })
        return {
          ...emp, tasks: updatedTasks,
          taskCounts: { ...emp.taskCounts, newTask: emp.taskCounts.newTask - 1, active: emp.taskCounts.active + 1 },
        }
      }
      return emp
    })
    setUserData({ ...userData, employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div style={{
      flexShrink: 0, width: '280px',
      background: 'linear-gradient(145deg, #0e1a14, #0a1210)',
      border: '1px solid rgba(0,229,160,0.25)',
      borderRadius: 'var(--radius)', padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '12px',
      transition: 'transform 0.2s, box-shadow 0.2s',
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--glow-green)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--green), transparent)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono)', background: 'var(--green-dim)', color: 'var(--green)', border: '1px solid rgba(0,229,160,0.3)' }}>
          {data.category}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{data.taskDate}</span>
      </div>

      <div>
        <div style={{ fontSize: '11px', color: 'var(--green)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '4px' }}>NEW TASK</div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{data.taskTitle}</h3>
      </div>

      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>{data.taskDescription}</p>

      <button onClick={acceptTask} style={{
        padding: '9px', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: 700,
        fontFamily: 'var(--font-main)', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
        background: 'linear-gradient(135deg, rgba(0,229,160,0.2), rgba(0,229,160,0.05))',
        color: 'var(--green)', border: '1px solid rgba(0,229,160,0.4)',
        transition: 'all 0.2s',
      }}
        onMouseEnter={e => { e.target.style.background = 'rgba(0,229,160,0.25)'; e.target.style.boxShadow = 'var(--glow-green)' }}
        onMouseLeave={e => { e.target.style.background = 'linear-gradient(135deg, rgba(0,229,160,0.2), rgba(0,229,160,0.05))'; e.target.style.boxShadow = 'none' }}
      >
        ✓ Accept Task
      </button>
    </div>
  )
}

export default NewTask