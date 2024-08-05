import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = () => {
  const fetchCategories = axios
    .get<Category[]>("/api/categories")
    .then((response) => response.data);

  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories,
    staleTime: 10 * 1000, // 10s
  });
};

export default useCategories;
