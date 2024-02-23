import React from "react";
import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import Table from "../../ui/Table.jsx";
import ProejctRow from "./ProjectRow.jsx";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <Table.Row key={project._id}>
            <ProejctRow key={project._id} project={project} index={index} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
