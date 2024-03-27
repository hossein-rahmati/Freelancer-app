import { useQuery } from "@tanstack/react-query";
import { getProjectsAPI } from "../services/projectService.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsAPI(search),
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
