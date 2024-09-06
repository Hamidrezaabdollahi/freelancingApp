import Table from "../../ui/Table";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

function ProposalTBodyRow({ proposal, index }) {
  const {description, duration, price, status} = proposal
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
    <Table.Row key={proposal._id}>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60 )}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={statusStyle[status].cls}>
          {statusStyle[status].label}
        </span>
      </td>
     
    </Table.Row>
  );
}

export default ProposalTBodyRow;
