import Sidebar from "../../ui/Sidebar.jsx";
import CustomNavLink from "../../ui/CutomNavLink.jsx";
import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout.jsx";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
