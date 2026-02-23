import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/Authcontext'

const Createtask = () => {
  const [userData, setUserData] = useContext(Authcontext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const employees = userData?.employees || []

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle, taskDescription, taskDate, category,
      active: false, newTask: true, failed: false, completed: false,
    }

    const updatedEmployees = [...userData.employees]
    updatedEmployees.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })

    const updatedData = { ...userData, employees: updatedEmployees }
    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    setTaskTitle(''); setCategory(''); setAssignTo(''); setTaskDate(''); setTaskDescription('')
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-input)', border: '1px solid var(--border)',
    color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'var(--font-main)',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono)', marginBottom: '6px',
  }

  const focusStyle = (e) => {
    e.target.style.borderColor = 'var(--cyan)'
    e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.1)'
  }
  const blurStyle = (e) => {
    e.target.style.borderColor = 'var(--border)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div className='fade-up-1' style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px',
      marginTop: '0',
    }}>
      {/* Section title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{
          width: '4px', height: '24px', borderRadius: '2px',
          background: 'linear-gradient(180deg, var(--cyan), transparent)',
        }} />
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Create New Task
        </h2>
      </div>

      <form onSubmit={submitHandler}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Task Title</label>
              <input
                value={taskTitle} onChange={e => setTaskTitle(e.target.value)}
                style={inputStyle} type='text' placeholder='e.g. Design homepage UI'
                required onFocus={focusStyle} onBlur={blurStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Due Date</label>
              <input
                value={taskDate} onChange={e => setTaskDate(e.target.value)}
                style={{ ...inputStyle, colorScheme: 'dark' }} type='date'
                required onFocus={focusStyle} onBlur={blurStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Assign To</label>
              <select
                value={assignTo} onChange={e => setAssignTo(e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
                required onFocus={focusStyle} onBlur={blurStyle}
              >
                <option value='' style={{ background: '#0e1117' }}>— Select employee —</option>
                {employees.map((emp, i) => (
                  <option key={i} value={emp.firstName} style={{ background: '#0e1117' }}>
                    {emp.firstName} ({emp.email})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Category</label>
              <input
                value={category} onChange={e => setCategory(e.target.value)}
                style={inputStyle} type='text' placeholder='e.g. Design, Dev, QA'
                required onFocus={focusStyle} onBlur={blurStyle}
              />
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Description</label>
            <textarea
              value={taskDescription} onChange={e => setTaskDescription(e.target.value)}
              style={{
                ...inputStyle, flex: 1, resize: 'none', minHeight: '160px',
                lineHeight: '1.6',
              }}
              placeholder='Describe the task in detail...'
              required onFocus={focusStyle} onBlur={blurStyle}
            />
            <button type='submit' style={{
              marginTop: '16px', padding: '12px', borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.05))',
              border: '1px solid rgba(0,212,255,0.4)',
              color: 'var(--cyan)', fontSize: '14px', fontWeight: 700,
              fontFamily: 'var(--font-main)', cursor: 'pointer', letterSpacing: '0.08em',
              textTransform: 'uppercase', transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.target.style.background = 'rgba(0,212,255,0.2)'; e.target.style.boxShadow = 'var(--glow-cyan)' }}
              onMouseLeave={e => { e.target.style.background = 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.05))'; e.target.style.boxShadow = 'none' }}
            >
              ＋ Assign Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Createtask