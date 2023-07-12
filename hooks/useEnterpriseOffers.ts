import { Offer } from "@/app/types/types";
import { OfferDataType } from "@/components/offers/AddOfferForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface addEnterpriseOffer {
  enterpriseId: string;
  newOfferData: OfferDataType;
  closeModal: () => void;
}

export default function useEnterpriseOffers(
  enterpriseId: string,
  offers?: Offer[]
) {
  const queryClient = useQueryClient();
  const router = useRouter();

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

  console.log(enterpriseOffers);

  return { enterpriseOffers, isLoading, isError, addEnterpriseOffer };
}
