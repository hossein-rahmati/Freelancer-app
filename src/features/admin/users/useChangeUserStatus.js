import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusAPI } from "../../../services/authService";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusAPI,
    onSuccess: (data) => {
      toast.success(data.data.message, { id: 1 });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
}
