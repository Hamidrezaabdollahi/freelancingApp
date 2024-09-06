import { useState } from "react";
import Table from "../../../ui/Table";
import toLocaleShortenDate from "../../../utils/toLocaleShortenDate";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposals from "../../proposals/CreateProposals";

function ProjectTBodyRow({ project, index }) {
  const { title, budget, deadline, status } = project;
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
  const [open, setOpen] = useState(false);
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(title)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocaleShortenDate(deadline)}</td>
      <td>
        <span className={projectStatus[status].className}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست برای پروژه ${title}`}
        >
          <CreateProposals
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>

        <button onClick={() => setOpen(true)}>
          {<MdAssignmentAdd className="w-5 h-5 text-primary-800" />}
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectTBodyRow;
