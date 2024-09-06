import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 px-3 bg-secondary-0 rounded-xl">
      <h1 className="font-black text-secondary-600 text-xl">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2 shadow-none rounded-xl bg-primary"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}
export default ProjectsHeader;
