import { User } from "@/app/types/next-auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUser(user: User) {
  const queryClient = useQueryClient();

  const getUserData = () => axios("/api/user").then((res) => res.data);

  const getUserTechnologies = () =>
    axios(`/api/user/technologies`).then((res) => res.data);

  const {
    data: userData,
    isLoading: userDataLoading,
    isError: userDataError,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
    initialData: user,
  });

  const updateProfileData = useMutation({
    mutationFn: (updatedData: {}) => {
      return axios.patch("/api/user/update/profile", { updatedData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userData"]);
    },
  });

  const {
    data: userTechnologies,
    isLoading: userTechnoLoading,
    isError: userTechnoError,
  } = useQuery(["userTechnologies"], getUserTechnologies);

  const updateUserTechnologies = useMutation({
    mutationFn: (technologiesIds: string[]) => {
      return axios.patch("/api/user/update/technologies", { technologiesIds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userTechnologies"]);
    },
  });

  return {
    userData,
    userDataLoading,
    userDataError,
    updateProfileData,
    userTechnologies,
    userTechnoLoading,
    userTechnoError,
    updateUserTechnologies,
  };
}
