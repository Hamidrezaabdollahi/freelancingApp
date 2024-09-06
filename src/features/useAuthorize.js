import { useLocation } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function useAuthorize() {
  const { user, isPending } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = user?.status === 2;


  let ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const pageToGo = pathname.split("/").at(1);
  let isAuthorized = user && user.role === ROLES[pageToGo];

  return { user, isPending, isAuthenticated, isAuthorized };
}
