import { useQuery } from "@tanstack/react-query";
import { getCategoryAPI } from "../services/categoryService";

export default function useCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryAPI,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, transformedCategories, isLoading };
}
