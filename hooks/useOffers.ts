import { Offer } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useOffers(offers?: Offer[]) {
  const {
    data: offersData,
    isLoading,
    isError,
  } = useQuery<Offer[]>({
    queryKey: ["allOffers"],
    queryFn: () => axios("/api/offers/").then((res) => res.data),
    initialData: offers,
  });

  return { offersData, isLoading, isError };
}
