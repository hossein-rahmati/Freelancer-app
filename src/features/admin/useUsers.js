import { useQuery } from "@tanstack/react-query";
import { getUsersAPI } from "../../services/authService.js";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersAPI,
  });
  const { users } = data || {};

  return { isLoading, users };
}
