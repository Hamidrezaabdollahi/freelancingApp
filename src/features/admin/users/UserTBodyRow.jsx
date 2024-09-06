import { useState } from "react";
import Modal from "../../../ui/Modal"
import ChangeUserStatus from "./ChangeUSerStatus";
import Table from "../../../ui/Table"

function UserTBodyRow({ user, index }) {
    const [open, setOpen] = useState(false)
  return (
    <Table.Row key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role.toLowerCase()}</td>
      <td>{user.status === 2 ? <span>فعال</span> : <span>غیر فعال</span>}</td>
      <td>
        <span onClick={()=>setOpen(true)}>تغییر وضعیت</span>
        <Modal
        open={open}
        onClose={()=>setOpen(false)}
        title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus
          userId={user._id}
          onClose={()=>setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserTBodyRow;