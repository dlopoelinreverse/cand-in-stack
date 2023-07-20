import { Offer } from "@/app/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useOffer(offerId?: string, offer?: Offer) {
  const queryClient = useQueryClient();

  const {
    data: offerData,
    isLoading,
    isError,
  } = useQuery<Offer>({
    queryKey: [offerId],
    queryFn: () => axios(`/api/offer/${offerId}`).then((res) => res.data),
    initialData: offer,
  });

  const updateOffer = useMutation({
    mutationFn: (updatedData: {}) =>
      axios
        .patch(`/api/offer/${offerId}`, { updatedData })
        .then((res) => console.log(res)),
    onSuccess: () => queryClient.invalidateQueries([offerId]),
  });

  return { offerData, isLoading, isError, updateOffer };
}
