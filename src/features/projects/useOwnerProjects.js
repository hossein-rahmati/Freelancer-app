import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsAPI } from "../../services/projectService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsAPI,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
