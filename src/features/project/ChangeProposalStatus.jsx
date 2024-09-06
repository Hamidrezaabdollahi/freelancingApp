import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loading from "../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();
  const { isUpdatingStatus, changeProposalStatus } = useChangeProposalStatus();
  const options = [
    { label: "رد شده", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید شده", value: 2 },
  ];
  const { register, handleSubmit } = useForm();



  
  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose(),
            queryClient.invalidateQueries({
              queryKey: ["project", projectId],
            });
        },
      }
    );
  };




  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت درخواست"
          options={options}
          register={register}
          required
        />
        <div className="mt-6">
          {isUpdatingStatus ? (
            <Loading />
          ) : (
            <button type="submit" className="btnConfirm">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
