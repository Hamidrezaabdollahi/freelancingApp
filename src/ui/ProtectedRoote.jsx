import { useEffect } from "react";
import useAuthorize from "../features/useAuthorize";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoote({ children }) {
  const { user, isPending, isAuthenticated, isAuthorized } = useAuthorize();
  const navigate = useNavigate();
  console.log(user);
  console.log(isAuthenticated);
  console.log(isAuthorized);

  useEffect(() => {
    if (!isAuthenticated && !isPending) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/auth");
    }
    if (!isAuthorized && !isPending) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, navigate, isPending]);

  if (isPending)
    return (
      <div className="flex items-center justify-center w-full h-screen bg-slate-100">
        <Loading />
      </div>
    );

  return children;
}

export default ProtectedRoote;
