import React, { useState } from 'react'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      return
    }

    onLogin?.(email.trim())
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>
        <p className="mt-2 text-center text-gray-500">Sign in to continue</p>

        <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Use any email and password to sign in. Admin access is available with an email containing “admin”.
        </p>
      </div>
    </div>
  )
}

export default Login
