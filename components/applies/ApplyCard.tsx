import { ApplyType } from "@/app/types/types";
import useOffers from "@/hooks/useOffers";
import { redirect } from "next/navigation";
import OfferCard from "../offers/OfferCard";

interface ApplyCardProps {
  apply: ApplyType;
}

export default function ApplyCard({ apply }: ApplyCardProps) {
  const { offersData, isLoading, isError } = useOffers();

  if (isLoading || !offersData) return <p>OffersData loading</p>;

  if (isError) return <p>OffersData error</p>;

  const offerData = offersData.find((offer) => offer.id === apply.offerId);

  if (!offerData) return redirect("/");

  return <></>;
}
