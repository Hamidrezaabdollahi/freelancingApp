import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(90);
  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/${user.role.toLowerCase()}`, { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    return () => timer && clearInterval(timer);
  }, [time]);

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      setTime(90);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            onSendOtp={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
            time={time}
            isSendingOtp={isSendingOtp}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm ">{renderStep()}</div>;
}

export default AuthContainer;
