import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Authcontext } from './context/Authcontext'

const App = () => {
  const [user, setUser] = useState(() => {
    try {
      const loggedInUser = localStorage.getItem('loggedInUser')
      return loggedInUser ? JSON.parse(loggedInUser) : null
    } catch {
      return null
    }
  })

  // authData is { employees: [...], admin: [...] }
  const [authData] = useContext(Authcontext)

  const handleLogin = (email, password) => {
    // Check admin array from localStorage
    if (authData?.admin) {
      const adminUser = authData.admin.find(
        (a) => a.email === email && a.password === password
      )
      if (adminUser) {
        const admin = { role: 'admin', data: adminUser }
        setUser(admin)
        localStorage.setItem('loggedInUser', JSON.stringify(admin))
        return
      }
    }

    // Check employee array from localStorage
    if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        const empData = { role: 'employee', data: employee }
        setUser(empData)
        localStorage.setItem('loggedInUser', JSON.stringify(empData))
        return
      }
    }

    alert("Invalid Credentials")
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === 'admin' && <AdminDashboard changeUser={setUser} data={user.data} />}
      {user?.role === 'employee' && <EmployeeDashboard changeUser={setUser} data={user.data} />}
    </>
  )
}

export default App