import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Loading from "../../ui/Loading";

function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
  time,
  isSendingOtp,
}) {
  const [otp, setOtp] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: checkOtp });
  const navigate = useNavigate();
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      if (!user.isActive) {
        navigate("/complete-profile");
        toast.success(message);
        return;
      }
      if (user.status !== 2) {
        navigate("/");
        toast("اطلاعات شما در حال برسی است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="pt-28">
      <form onSubmit={checkOtpHandler}>
        <div className="flex items-center justify-between w-6/12 my-8">
          <button onClick={onBack}>
            <HiArrowRight className="w-6 h-6 text-secondary-500" />
          </button>
          <p className="font-bold text-secondary-800 ">
            لطفا کد تایید را وارد کنید
          </p>
        </div>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex justify-center gap-x-2 flex-row-reverse "
          inputStyle={{
            height: "2.5rem",
            width: "2.5rem",
            borderRadius: ".5rem",
            border: "1px solid rgb(var(--color-primary-400))",
          }}
        />
        <div className="flex items-center justify-center mt-5 text-secondary-500">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد</button>
          )}
        </div>
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btnConfirm my-2">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
