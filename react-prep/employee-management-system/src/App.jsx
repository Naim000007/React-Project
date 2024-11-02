import { useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

  useEffect(() => {

    // setLocalStorage();
    getLocalStorage()
  });




  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashBoard /> */}
    </>
  )
}
export default App