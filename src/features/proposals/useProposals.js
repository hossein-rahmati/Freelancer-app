import { useQuery } from "@tanstack/react-query";
import { getProposalsAPI } from "../../services/proposalService.js";

export default function useProposals() {
  const { isLoading, data } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsAPI,
  });

  const { proposals } = data || {};

  return { isLoading, proposals };
}
