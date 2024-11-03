import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { employees, admin } = useContext(AuthContext);


  // Ensure data is available and restore login state if available in localStorage
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //     setLoading(false);
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {

    if (admin.find((e) => e.email === email && e.password === password)) {
      setUser("admin");

    } else if (
      employees.find((e) => e.email === email && e.password === password)
    ) {
      setUser("employee");

    } else {
      alert("Invalid email or password");

    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashBoard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;
