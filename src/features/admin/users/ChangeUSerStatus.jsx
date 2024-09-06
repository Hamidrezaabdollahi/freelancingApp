import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect"
import Loading from "../../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";


function ChangeUserStatus({ userId, onClose }) {

  const queryClient = useQueryClient();
  const { isUpdatingStatus, changeUserStatus } = useChangeUserStatus();
  const options = [
    { label: "رد شده", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید شده", value: 2 },
  ];
  const { register, handleSubmit } = useForm();



  
  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose(),
            queryClient.invalidateQueries({
              queryKey: ["users"],
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

export default ChangeUserStatus;
