import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalAPI } from "../../services/proposalService.js";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalAPI,
    onSuccess: (data) => {
      toast.success(data.data.message, { id: 1 });
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isCreating, createProposal };
}
