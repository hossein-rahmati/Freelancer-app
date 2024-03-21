import { useState } from "react";
import ProjectTable from "../features/projects/ProjectTable";
import { HiPlus } from "react-icons/hi";
import Modal from "../ui/Modal.jsx";
import CreateProjectForm from "../features/projects/CreateProjectForm.jsx";

function Projects() {
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-secondary-700">پروژه های شما</h2>
        <>
          <button
            onClick={() => setIsNewProjectOpen(true)}
            className="btn btn--primary flex items-center gap-1"
          >
            <HiPlus className="w-4 h-4" />
            <span>اضافه کردن پروژه</span>
          </button>
          <Modal
            open={isNewProjectOpen}
            title="ایجاد پروژه جدید"
            onClose={() => setIsNewProjectOpen(false)}
          >
            <CreateProjectForm onClose={() => setIsNewProjectOpen(false)} />
          </Modal>
        </>
      </div>
      <ProjectTable />
    </div>
  );
}

export default Projects;
