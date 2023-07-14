import { Offer } from "@/app/types/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useOffers(offers?: Offer[]) {
  const queryClient = useQueryClient();
  const {
    data: offersData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allOffers"],
    queryFn: () => axios("/api/offers/").then((res) => res.data),
    initialData: offers,
  });

  return { offersData, isLoading, isError };
}
