import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userData?.employees || !userData?.admin) {
      alert("Data is loading...");
      return;
    }

    const admin = userData.admin.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
      const loggedInUser = {
        role: "admin",
      };

      setUser(loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      return;
    }

    const employee = userData.employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      const loggedInUser = {
        role: "employee",
        data: employee,
      };

      setUser(loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      return;
    }

    alert("Invalid Email or Password");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === "admin" && <AdminDashboard />}

      {user?.role === "employee" && (
        <EmployeeDashboard data={user.data} />
      )}
    </>
  );
};

export default App;