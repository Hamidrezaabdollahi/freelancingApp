import { HiEye, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import Table from "../../ui/Table";
import toLocaleShortenDate from "../../utils/toLocaleShortenDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import {Link} from "react-router-dom"

function ProjectTBodyRow({ project, index }) {
  const { removeProject } = useRemoveProject();
  const [open, setOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleShortenDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setOpen(true)}>
              <HiOutlinePencil className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={`ویرایش ${project.title}`}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${project.title}`}
            >
              <ConfirmDelete
                onClose={() => setIsDeleteOpen(false)}
                resourceName={project.title}
                disabled={false}
                onDeleteConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center items-center">
          {<HiEye className="w-5 h-5 text-primary-700" />}
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectTBodyRow;
