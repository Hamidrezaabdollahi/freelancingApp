import { useForm } from "react-hook-form";
import TextFieldPro from "../../ui/TextFieldPro";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposals({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal({...data, projectId},{
      onSuccess : ()=>onClose()
    })
  }

  return (
    <form className="space-y-4" onClick={handleSubmit(onSubmit)}>
      <TextFieldPro
        label="توضیحات"
        name="description"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "وارد کردن توضیحات ضروری است.",
          minLength: {
            value: 5,
            message: "طول عبارت باید بیشتر از ۵ حرف باشد ",
          },
        }}
      />
      <TextFieldPro
        label="قیمت"
        name="price"
        register={register}
        errors={errors}
        type="number"
        required
        validationSchema={{
          required: "وارد کردن قیمت ضروری است.",
        }}
      />
      <TextFieldPro
        label="مدت زمان"
        name="duration"
        register={register}
        errors={errors}
        type="number"
        required
        validationSchema={{
          required: "وارد کردن مدت زمان ضروری است.",
        }}
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btnConfirm">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProposals;
