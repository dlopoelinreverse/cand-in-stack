import { Offer } from "@/app/types/types";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import React from "react";

export default function OffersDisplay({
  offers,
  enterpriseId,
}: {
  offers: Offer[];
  enterpriseId: string;
}) {
  const { enterpriseOffers, isLoading, isError } = useEnterpriseOffers(
    enterpriseId,
    offers
  );

  if (isLoading) return <p>Is Loading</p>;

  if (isError) return <p>Is Error</p>;

  return (
    <ul>
      {enterpriseOffers?.map((offer) => (
        <p key={offer.id}>{offer.title}</p>
      ))}
    </ul>
  );
}
