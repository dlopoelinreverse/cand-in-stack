import { AnswerType, ApplyType } from "@/app/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useCandidateApply(applies?: ApplyType[]) {
  const queryClient = useQueryClient();

  const {
    data: candiateApplies,
    isLoading: isLoadingCandidatesApplies,
    isError: isErrorCandidatesApplies,
  } = useQuery<ApplyType[]>({
    queryKey: ["candiateApplies"],
    queryFn: () => axios("/api/applies/candidate").then((res) => res.data),
    initialData: applies,
  });

  const createApply = useMutation({
    mutationFn: (applyContent: {
      offerId: string;
      enterpriseId: string;
      answers: AnswerType[];
    }) => {
      return axios.post("/api/applies/candidate/new", applyContent);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["candidatesApplies"]);
    },
  });

  return {
    candiateApplies,
    isLoadingCandidatesApplies,
    isErrorCandidatesApplies,
    createApply,
  };
}
