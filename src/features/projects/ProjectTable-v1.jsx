import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import truncateText from "../../utils/truncateText.js";
import toLocalDateShort from "../../utils/toLocalDateShort.js";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <div>
      <table className="bg-secondary-0 overflow-x-auto">
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
