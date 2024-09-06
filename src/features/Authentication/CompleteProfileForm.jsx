import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextFieldPro from "../../ui/TextFieldPro";

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="pt-28 sm:max-w-sm mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldPro
          errors={errors}
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "وارد کردن عنوان ضروری است.",
          }}
        />
        <TextFieldPro
          validationSchem={{
            required: "انتخاب ایمیل ضروری است",
          }}
          errors={errors}
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "وارد کردن عنوان ضروری است.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "آدرس ایمیل نامعتبر",
            },
          }}
        />

        <div className="flex items-center justify-center gap-x-6 my-6">
          <RadioInput
            label="کارفرما"
            register={register}
            id="OWNER"
            name="role"
            value="OWNER"
            checked={watch("role") === "OWNER"}
            validationSchema={{
              required: "وارد کردن نقش ضروری است.",
            }}
            errors={errors}
          />
          <RadioInput
            label="فریلنسر"
            register={register}
            id="FREELANCER"
            name="role"
            value="FREELANCER"
            checked={watch("role") === "FREELANCER"}
            validationSchema={{
              required: "وارد کردن نقش ضروری است.",
            }}
          />
        </div>
        <div className="flex items-center justify-start mb-4">
          {errors && errors["role"] && (
            <span className="text-error  block text-sm ">
              {errors["role"]?.message}
            </span>
          )}
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btnConfirm">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
