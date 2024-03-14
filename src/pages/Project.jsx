import useProject from "../features/Project/useProject.js";
import Loading from "../ui/Loading.jsx";
import ProjectHeader from "../features/Project/ProjectHeader.jsx";
import ProposalsTable from "../features/Project/ProposalsTable.jsx";

function Project() {
  const { project, isLoading } = useProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
