import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutAPI } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isPending, logout };
}
