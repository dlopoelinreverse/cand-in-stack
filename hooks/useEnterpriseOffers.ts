import { Offer } from "@/app/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface addEnterpriseOffer {
  enterpriseId: string;
  newOfferData: OfferDataType;
  closeModal: () => void;
}

type OfferDataType = {
  title: string;
  technologiesIds: string[];
  description: string;
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
    mutationFn: ({
      enterpriseId,
      newOfferData,
      closeModal,
    }: addEnterpriseOffer) => {
      return axios
        .post(`/api/offers/${enterpriseId}/new`, newOfferData)
        .then(() => closeModal());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [enterpriseId] });
      router.refresh();
    },
  });

  return { enterpriseOffers, isLoading, isError, addEnterpriseOffer };
}
