/* eslint-disable react/prop-types */
import Table from "../../../ui/Table.jsx";
import truncateText from "../../../utils/truncateText.js";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers.js";
import toLocalDateShort from "../../../utils/toLocalDateShort.js";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal.jsx";
import CreateProposal from "../../proposals/CreateProposal.jsx";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
