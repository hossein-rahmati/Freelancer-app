import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

function CheckOTPform({ phoneNumber, onBack, onResendOTP, OTPresponse }) {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const handleCheckOTP = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: 1 });
    }
  };

  useEffect(() => {
    const time = timer > 0 && setInterval(() => setTimer((t) => t - 1), 1000);
    return () => {
      if (time) {
        clearInterval(time);
      }
    };
  }, [timer]);

  return (
    <div>
      <form onSubmit={handleCheckOTP} className="space-y-10">
        <button onClick={onBack}>
          <HiArrowRight className="w-6 h-6 text-secondary-500" />
        </button>
        {OTPresponse && (
          <p className="flex items-center gap-x-2 my-4">
            <span>{OTPresponse?.message}</span>
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-secondary-500" />
            </button>
          </p>
        )}
        <div className="mb-4 text-secondary-500">
          {timer > 0 ? (
            <p>{timer} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={() => onResendOTP}>ارسال مجدد کد تایید</button>
          )}
        </div>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} type="number" />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            border: "1px solid rgb(var(--color-primary-300))",
            padding: "0.5rem 0.2rem",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPform;
