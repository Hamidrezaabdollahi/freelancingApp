import { HiCollection, HiHome, HiUser, HiViewGrid } from "react-icons/hi"
import AppLayout from "../../ui/AppLayout"
import CustomNavLink from "../../ui/CustomNavLink"
import Sidebar from "../../ui/Sidebar"


function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <li className="w-full">
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li className="w-full">
          <CustomNavLink to="users">
            <HiUser />
            <span>کاربران</span>
          </CustomNavLink>
        </li> 
        <li className="w-full">
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
        </li>

        <li className="w-full">
          <CustomNavLink to="projects">
            <HiViewGrid />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </Sidebar>
    </AppLayout>
  )
}

export default AdminLayout