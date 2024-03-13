import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectAPI } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectAPI,
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

  return { isEditing, editProject };
}
