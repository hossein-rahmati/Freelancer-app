import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectAPI } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectAPI,
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

  return { isCreating, createProject };
}
