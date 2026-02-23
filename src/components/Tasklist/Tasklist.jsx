import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  const tasks = data?.tasks || []

  return (
    <div style={{ marginTop: '28px' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '4px', height: '20px', borderRadius: '2px', background: 'linear-gradient(180deg, var(--cyan), transparent)' }} />
        <h2 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          My Tasks
        </h2>
        <span style={{ padding: '2px 10px', borderRadius: '99px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', background: 'var(--cyan-dim)', border: '1px solid rgba(0,212,255,0.2)' }}>
          {tasks.length}
        </span>
      </div>

      {/* Scrollable task cards */}
      <div style={{
        display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px',
        alignItems: 'stretch', minHeight: '260px',
      }}>
        {tasks.length === 0 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', color: 'var(--text-muted)', fontSize: '14px',
            fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
          }}>
            No tasks assigned yet.
          </div>
        )}
        {tasks.map((elem, idx) => {
          if (elem.active)    return <AcceptTask   key={idx} data={elem} employeeId={data.id} />
          if (elem.newTask)   return <NewTask      key={idx} data={elem} employeeId={data.id} />
          if (elem.completed) return <CompleteTask key={idx} data={elem} employeeId={data.id} />
          if (elem.failed)    return <FailedTask   key={idx} data={elem} employeeId={data.id} />
          return null
        })}
      </div>
    </div>
  )
}

export default TaskList