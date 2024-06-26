import { useEffect, useState } from "react";
import CheckOTPform from "./CheckOTPform";
import SendOTPform from "./SendOTPform";
import { getOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm();
  const { user } = useUser();

  const {
    isPending: isSendingOTP,
    data: OTPresponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOTP,
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const handleSentOTP = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: 1 });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPform
            onSubmit={handleSubmit(handleSentOTP)}
            isSendingOTP={isSendingOTP}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPform
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOTP={handleSentOTP}
            OTPresponse={OTPresponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
