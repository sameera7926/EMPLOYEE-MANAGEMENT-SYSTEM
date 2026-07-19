import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Employee Management System
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter Email"
            className="border rounded-lg px-4 py-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border rounded-lg px-4 py-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;