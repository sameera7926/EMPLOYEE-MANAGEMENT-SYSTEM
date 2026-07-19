# 🚀 Employee Management System (EMS)

A modern Employee Management System built using **React.js**, **Context API**, **Tailwind CSS**, and **Local Storage**. This application provides separate dashboards for Admin and Employees, allowing task management and user authentication without a backend.

---

## 📌 Features

### 👨‍💼 Admin
- Secure Admin Login
- View Admin Dashboard
- Create and assign tasks to employees
- View all employees and their assigned tasks
- Logout functionality

### 👨‍💻 Employee
- Secure Employee Login
- Personalized Dashboard
- View assigned tasks
- View task statistics
- View task categories:
  - 🆕 New Tasks
  - 🟢 Active Tasks
  - ✅ Completed Tasks
  - ❌ Failed Tasks
- Logout functionality

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| Context API | Global State Management |
| Tailwind CSS | UI Styling |
| Local Storage | Data Persistence |
| JavaScript (ES6+) | Application Logic |
| Vite | Development & Build Tool |

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── auth/
│   │   └── Login.jsx
│   │
│   ├── dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   │
│   ├── tasklist/
│   │   ├── AcceptTask.jsx
│   │   ├── NewTask.jsx
│   │   ├── Complete.jsx
│   │   ├── Failed.jsx
│   │   └── TaskList.jsx
│   │
│   └── others/
│       ├── Header.jsx
│       ├── TaskNumber.jsx
│       ├── AllTask.jsx
│       └── CreateTasklist.jsx
│
├── context/
│   └── AuthProvider.jsx
│
├── utils/
│   └── LocalStorage.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication

The application supports two types of users.

### Admin Login

```
Email: admin@example.com
Password: 123
```

### Employee Login

```
employee1@example.com
Password: 123

employee2@example.com
Password: 123

employee3@example.com
Password: 123

employee4@example.com
Password: 123

employee5@example.com
Password: 123
```

---

## 📊 Task Status

Each employee's task can be in one of the following states:

| Status | Description |
|---------|-------------|
| 🆕 New | Newly assigned task |
| 🟢 Active | Accepted and currently working |
| ✅ Completed | Finished successfully |
| ❌ Failed | Could not be completed |

---

## 💾 Local Storage

The application stores:

```
employees
admin
loggedInUser
```

This allows authentication and task data to persist even after refreshing the page.

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/sameera7926ITORY.git
```

Go to the project directory

```bash
cd YOUR_REPOSITORY
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---


## 📖 Learning Outcomes

This project helped in understanding:

- React Functional Components
- React Hooks
- useState
- useEffect
- useContext
- Context API
- Props
- Conditional Rendering
- Event Handling
- Array Methods
- Local Storage
- Tailwind CSS
- Component-Based Architecture
- Authentication Flow

---


## 👨‍💻 Author

**sameera**

GitHub:
https://github.com/sameera7926



---

## 📄 License

This project is developed for learning purposes and is open for educational use.

---

# ⭐ If you like this project, don't forget to Star the repository!