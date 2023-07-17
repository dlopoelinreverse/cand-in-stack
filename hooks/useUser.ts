import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUser() {
  const queryClient = useQueryClient();

  const getUserTcechnologies = () =>
    axios("/api/user/technologies").then((res) => res.data);

  const {
    data: userTechnologies,
    isLoading,
    isError,
  } = useQuery(["userTechnologies"], getUserTcechnologies);

  const updateUserTechnologies = useMutation({
    mutationFn: (technologiesIds: string[]) => {
      return axios
        .patch("/api/user/update/technologies", { technologiesIds })
        .then((res) => console.log(res));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userTechnologies"]);
    },
  });

  return { userTechnologies, isLoading, isError, updateUserTechnologies };
}
