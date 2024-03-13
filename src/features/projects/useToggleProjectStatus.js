import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  editProjectAPI,
  toggleProjectStatusAPI,
} from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectStatusAPI,
    onSuccess: (data) => {
      toast.success(data.data.message, { id: 1 });
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, toggleProjectStatus };
}
