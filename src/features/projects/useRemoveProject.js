import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import { toast } from "react-hot-toast";
export default function useRemoveProject() {
  const queryClient = useQueryClient();

  // in POST, DELETE, PUT we use useMutation and we just dont want to get sth ,
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey:["owner-projects"]
      })
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProject, isDeleting };
}
    