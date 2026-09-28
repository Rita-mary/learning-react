import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
