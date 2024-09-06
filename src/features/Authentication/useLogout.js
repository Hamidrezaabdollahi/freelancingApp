import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoggingout, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("کاربر با موفقیت خارج شد");
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });
  return { isLoggingout, logout };
}
