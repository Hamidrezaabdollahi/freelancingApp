import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
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
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
        </li>

        <li className="w-full">
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
