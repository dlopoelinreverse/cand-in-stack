import { Offer } from "@/app/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface addEnterpriseOffer {
  enterpriseId: string;
  newOfferData: OfferDataType;
}

type OfferDataType = {
  title: string;
  description: string;
  city: string;
  questions: string[];
  jobType: string[];
  technologiesIds: string[];
};

export default function useEnterpriseOffers(
  enterpriseId: string,
  offers?: Offer[]
) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: enterpriseOffers,
    isLoading,
    isError,
  } = useQuery<Offer[]>({
    queryKey: [enterpriseId],
    queryFn: () => axios(`/api/offers/${enterpriseId}`).then((res) => res.data),
    initialData: offers,
  });

  const addEnterpriseOffer = useMutation({
    mutationFn: ({ enterpriseId, newOfferData }: addEnterpriseOffer) => {
      return axios.post(`/api/offers/${enterpriseId}/new`, newOfferData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [enterpriseId] });
      queryClient.invalidateQueries({ queryKey: ["allOffers"] });
      router.push("/offers");
    },
  });

  return { enterpriseOffers, isLoading, isError, addEnterpriseOffer };
}
