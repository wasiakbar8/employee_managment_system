<div align="center">

# ⚡ WorkFlow — Employee Task Management System

**A modern, role-based task management system built with React.js**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-00E5A0?style=for-the-badge)](LICENSE)

[🚀 Live Demo](https://your-vercel-link.vercel.app) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/wasiakbar8/employee_managment_system/issues) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/wasiakbar8/employee_managment_system/issues)

</div>

---

## 📸 Screenshots

### 🖥️ Admin Dashboard
![Admin Dashboard](https://raw.githubusercontent.com/wasiakbar8/employee_managment_system/main/screenshots/ems%20a.jpg)

> Admin can view all employees, their task counts, and assign new tasks from one place.

### 🖥️ Employee Dashboard
![Employee Dashboard](https://raw.githubusercontent.com/wasiakbar8/employee_managment_system/main/screenshots/ems%20u.jpg)

> Employees see their personal task board — accept new tasks, mark them complete or failed.

---

## ✨ Features

### 👑 Admin Panel
- 🔐 Secure role-based login
- 📋 Create and assign tasks to any employee
- 📊 Live overview of every employee's task counts (New / Active / Completed / Failed)
- 🎯 Dropdown employee selector — no typos when assigning

### 👤 Employee Portal
- ✅ Accept new tasks with one click
- ⚡ Mark tasks as **Completed** or **Failed**
- 📈 Live stat counters update instantly
- 🃏 Beautiful task cards with category & due date

### 🎨 UI/UX
- 🌑 Luxury dark theme — Obsidian dark with electric cyan & gold accents
- ✨ Smooth fade-up animations and glow hover effects
- 📱 Responsive layout
- 🔤 Premium typography — Syne + JetBrains Mono fonts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library & component architecture |
| **React Context API** | Global state management |
| **localStorage** | Data persistence (no backend needed) |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **CSS Variables** | Consistent design tokens & theming |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v16+) and **npm** installed.

```bash
node --version   # v16 or higher
npm --version    # v8 or higher
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/wasiakbar8/employee_managment_system.git

# 2. Navigate into the project
cd employee_managment_system

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| 👑 **Admin** | `admin@me.com` | `123` |
| 👤 **Employee 1** | `syedwasiakbar@gmail.com` | `123` |
| 👤 **Employee 2** | `ali.khan@example.com` | `123` |
| 👤 **Employee 3** | `sara.ahmed@example.com` | `123` |
| 👤 **Employee 4** | `john.doe@example.com` | `123` |
| 👤 **Employee 5** | `mina.shah@example.com` | `123` |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx              # Login page
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx     # Admin layout
│   │   └── EmployeeDashboard.jsx  # Employee layout
│   ├── others/
│   │   ├── Header.jsx             # Top navigation bar
│   │   ├── Createtask.jsx         # Task creation form
│   │   ├── Alltask.jsx            # Employee overview table
│   │   └── Tasklistnumber.jsx     # Stat counter cards
│   └── Tasklist/
│       ├── Tasklist.jsx           # Horizontal task card list
│       ├── NewTask.jsx            # New task card
│       ├── AcceptTask.jsx         # Active task card
│       ├── CompleteTask.jsx       # Completed task card
│       └── FailedTask.jsx         # Failed task card
├── context/
│   ├── Authcontext.jsx            # Context definition
│   └── Authprovider.jsx           # Context provider + init
├── Utils/
│   └── LocalStorage.jsx           # Seed data + storage helpers
├── App.jsx                        # Root component + auth logic
├── main.jsx                       # Entry point
└── index.css                      # Global theme variables
```

---

## 🔄 How It Works

```
User logs in
     │
     ├── Admin? ──→ AdminDashboard
     │                   ├── View all employees + task counts (Alltask)
     │                   └── Create & assign tasks (Createtask)
     │
     └── Employee? ──→ EmployeeDashboard
                           ├── Stat cards (Tasklistnumber)
                           └── Task board (Tasklist)
                               ├── NewTask    → Accept button
                               ├── AcceptTask → Complete / Fail buttons
                               ├── CompleteTask
                               └── FailedTask
```

---

## 📸 How to Add Screenshots

1. Take screenshots of your running app
2. Create a `screenshots/` folder in your project root
3. Save them as:
   - `screenshots/admin-dashboard.png`
   - `screenshots/employee-dashboard.png`
4. Push to GitHub — images will appear automatically in this README

---

## 🚢 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Click **Deploy** — done!

Every `git push` triggers an automatic redeployment.

---

## 🔮 Future Improvements

- [ ] Add real backend with Node.js + MongoDB
- [ ] Email notifications when tasks are assigned
- [ ] Task priority levels (High / Medium / Low)
- [ ] Due date countdown & overdue alerts
- [ ] Admin analytics dashboard with charts
- [ ] Dark/Light theme toggle
- [ ] Mobile responsive task board

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo, then:
git checkout -b feature/AmazingFeature
git commit -m "Add AmazingFeature"
git push origin feature/AmazingFeature
# Open a Pull Request
```

---

## 👨‍💻 Author

**Your Name**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/YOURPROFILE)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/wasiakbar8)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

⭐ **Star this repo if you found it helpful!** ⭐

Made with ❤️ and lots of ☕

</div>
