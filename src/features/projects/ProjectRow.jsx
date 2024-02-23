import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers.js";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal.jsx";
import { useState } from "react";

export default function ProejctRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
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
      <td>
        <button onClick={() => setIsEditOpen(true)}>
          <TbPencilMinus className="w-5 h-5 text-primary-900" />
        </button>
        <Modal
          open={isEditOpen}
          title="modal title"
          onClose={() => setIsEditOpen(false)}
        >
          this is modal
        </Modal>
        <button>
          <HiOutlineTrash className="w-5 h-5 text-error" />
        </button>
      </td>
    </Table.Row>
  );
}
