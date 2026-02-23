import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

const AcceptTask = ({ data, employeeId }) => {
  const [userData, setUserData] = useContext(Authcontext)

  const updateTask = (status) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle && task.active === true) {
            return status === 'completed'
              ? { ...task, active: false, completed: true }
              : { ...task, active: false, failed: true }
          }
          return task
        })
        const newCounts = { ...emp.taskCounts, active: emp.taskCounts.active - 1 }
        if (status === 'completed') newCounts.completed = emp.taskCounts.completed + 1
        else newCounts.failed = emp.taskCounts.failed + 1
        return { ...emp, tasks: updatedTasks, taskCounts: newCounts }
      }
      return emp
    })
    setUserData({ ...userData, employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div style={{
      flexShrink: 0, width: '280px',
      background: 'linear-gradient(145deg, #0e1420, #0a0f1a)',
      border: '1px solid rgba(0,212,255,0.25)',
      borderRadius: 'var(--radius)', padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '12px',
      transition: 'transform 0.2s, box-shadow 0.2s',
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--glow-cyan)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono)', background: 'var(--cyan-dim)', color: 'var(--cyan)', border: '1px solid rgba(0,212,255,0.3)' }}>
          {data.category}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{data.taskDate}</span>
      </div>

      <div>
        <div style={{ fontSize: '11px', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '4px' }}>IN PROGRESS</div>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{data.taskTitle}</h3>
      </div>

      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>{data.taskDescription}</p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => updateTask('completed')} style={{
          flex: 1, padding: '8px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: 700,
          fontFamily: 'var(--font-main)', cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
          background: 'var(--green-dim)', color: 'var(--green)', border: '1px solid rgba(0,229,160,0.35)',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.boxShadow = 'var(--glow-green)' }}
          onMouseLeave={e => { e.target.style.boxShadow = 'none' }}
        >
          ✓ Done
        </button>
        <button onClick={() => updateTask('failed')} style={{
          flex: 1, padding: '8px', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: 700,
          fontFamily: 'var(--font-main)', cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
          background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid rgba(255,77,106,0.35)',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.boxShadow = 'var(--glow-red)' }}
          onMouseLeave={e => { e.target.style.boxShadow = 'none' }}
        >
          ✕ Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask