import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") {
        return navigate("/owner");
      }
      if (user.role === "FREELANCER") {
        return navigate("/freelancer");
      }
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message, { id: 1 });
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            label="ایمیل"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کافرما"
              name="role"
              id="OWNER"
              value="OWNER"
              checked={role === "OWNER"}
              onChange={(e) => setRole(e.target.value)}
            />
            <RadioInput
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
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
    </div>
  );
}

export default CompleteProfileForm;
