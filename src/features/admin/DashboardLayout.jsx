import Loading from "../../ui/Loading.jsx";
import DashboardHeader from "../../ui/DashboardHeader.jsx";
import useProjects from "../../hooks/useProjects.js";
import useProposals from "../proposals/useProposals.js";
import useUsers from "./useUsers.js";
import Stats from "./Stats.jsx";

function DashboardLayout() {
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProposals || isLoadingProjects || isLoadingUsers)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
