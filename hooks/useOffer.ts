import { Offer } from "@/app/types/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useOffer(offer?: Offer, offerId?: string) {
  const queryClient = useQueryClient();

  const {
    data: offerData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [offerId],
    queryFn: () => axios(`/api/offer/${offerId}`).then((res) => res.data),
    initialData: offer,
  });

  return { offerData, isLoading, isError };
}
