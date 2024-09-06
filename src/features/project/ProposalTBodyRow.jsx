import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalTBodyRow({ proposal, index }) {
  const [open, setOpen] = useState(false);
  const { status } = proposal;
  const statusStyle = [
    {
      label: "رد شده",
      cls: "badge badge--danger",
    },
    {
      label: "در انتظار تایید",
      cls: "badge badge--secondary",
    },
    {
      label: "تایید شده",
      cls: "badge badge--success",
    },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={statusStyle[status].cls}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={() => setOpen(false)} title="تغییر وضعیت درخواست">
          <ChangeProposalStatus proposalId={proposal._id} onClose={()=>setOpen(false)}/>
        </Modal>
        <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalTBodyRow;
