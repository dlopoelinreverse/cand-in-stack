import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useTechnology() {
  const queryClient = useQueryClient();

  // ?? get technogies by CategoryId

  const getTechnologies = () =>
    axios("/api/technologies").then((res) => res.data);
  const getCategories = () =>
    axios("/api/technologies/categories").then((res) => res.data);

  const {
    data: technologies,
    isLoading: isTechnoLoading,
    isError: isTechnoError,
    refetch: refetchTechnos,
  } = useQuery(["technologies"], getTechnologies);

  const {
    data: categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery(["categories"], getCategories);

  const addTechnology = useMutation({
    mutationFn: (newTechnologyData: {
      technoName: string;
      categoryId: string;
    }) => {
      return axios.post("/api/technologies/new", newTechnologyData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["technologies"]);
    },
  });

  return {
    technologies,
    isTechnoLoading,
    isTechnoError,
    refetchTechnos,
    addTechnology,
    categories,
    isCategoryLoading,
    isCategoryError,
  };
}
