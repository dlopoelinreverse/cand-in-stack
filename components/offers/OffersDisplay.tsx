"use client";
import { Offer } from "@/app/types/types";
import React from "react";
import OfferCard from "./OfferCard";
import EnterpriseOffers from "./EnterpriseOffers";
import useOffers from "@/hooks/useOffers";

export default function OffersDisplay({
  offers,
  enterpriseId,
  usage,
}: {
  offers: Offer[];
  enterpriseId?: string;
  usage?: "enterpriseProfile";
}) {
  const { offersData, isLoading, isError } = useOffers(offers);
  if (enterpriseId)
    return <EnterpriseOffers enterpriseId={enterpriseId} offers={offers} />;

  if (usage === "enterpriseProfile")
    return (
      <ul className="flex flex-wrap items-start justify-start w-full h-full gap-5 mx-auto mt-10">
        {offers?.map((offer: Offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    );

  if (isLoading) return <p>Is Loading</p>;

  if (isError) return <p>Is Error</p>;

  return (
    <ul className="flex flex-wrap items-start justify-start w-full h-full gap-5 mx-auto mt-10">
      {offersData?.map((offer: Offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </ul>
  );
}
