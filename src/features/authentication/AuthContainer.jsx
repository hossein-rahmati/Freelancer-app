import React, { useState } from "react";
import CheckOTPform from "./CheckOTPform";
import SendOTPform from "./SendOTPform";
import { getOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09181111111");
  const {
    isPending: isSendingOTP,
    data: OTPresponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOTP,
  });

  const handleSentOTP = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ phoneNumber });
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
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={handleSentOTP}
            isSendingOTP={isSendingOTP}
          />
        );
      case 2:
        return (
          <CheckOTPform
            phoneNumber={phoneNumber}
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
