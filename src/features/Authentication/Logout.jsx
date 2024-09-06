import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isLoggingout, logout } = useLogout();
  return isLoggingout ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiOutlineLogout className="w-5 h-5 text-secondary-600 rotate-180 hover:text-error transition-all duration-200 hover:font-black" />
    </button>
  );
}

export default Logout;
