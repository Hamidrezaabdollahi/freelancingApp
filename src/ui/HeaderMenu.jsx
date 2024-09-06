import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkmodeToggle from "./DarkmodeToggle";
import Logout from "../features/Authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-2">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-600 hover:text-primary-900 transition-all duration-200 hover:font-black" />
        </Link>
      </li>
      <li className="flex">
        <DarkmodeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
