import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { employees, admin } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (admin.find(e => e.email === email && e.password === password)) {
      setUser("admin");
    } else if (employees.find(e => e.email === email && e.password === password)) {
      setUser("employee");
    } else {
      alert("Invalid email or password");
    }
  };
  // email === admin[0]?.email && password === admin[0]?.password
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashBoard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;
