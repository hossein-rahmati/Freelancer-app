import DashboardHeader from "./DashboardHeader.jsx";
import Stats from "./Stats.jsx";
import useOwnerProjects from "../projects/useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
