import { Offer } from "@/app/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface addEnterpriseOffer {
  enterpriseId: string;
  newOfferData: {
    title: string;
    creatorId: string;
    jobType?: string | null;
    technologiesIds: string[];
  };
}

export default function useEnterpriseOffers(
  enterpriseId: string,
  offers?: Offer[]
) {
  const queryClient = useQueryClient();

  const getOffersByEnterpriseId = (enterpriseId: string) => {
    axios(`/api/offers/${enterpriseId}`).then((res) => res.data);
  };

  const {
    data: enterpriseOffers,
    isLoading,
    isError,
  } = useQuery<Offer[]>({
    queryKey: [enterpriseId],
    queryFn: () => axios(`/api/offers/${enterpriseId}`),
    initialData: offers,
  });

  const addEnterpriseOffer = useMutation({
    mutationFn: ({ enterpriseId, newOfferData }: addEnterpriseOffer) => {
      return axios.post(`/api/offers/${enterpriseId}/new`, newOfferData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([enterpriseId]);
    },
  });

  return { enterpriseOffers, isLoading, isError, addEnterpriseOffer };
}
