"use client";
import { Offer } from "@/app/types/types";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import React from "react";
import OfferCard from "./OfferCard";
import AddOfferForm from "./AddOfferForm";

export default function OffersDisplay({
  offers,
  enterpriseId,
}: {
  offers: Offer[];
  enterpriseId: string;
}) {
  const {
    enterpriseOffers: data,
    isLoading,
    isError,
  } = useEnterpriseOffers(enterpriseId, offers);

  if (isLoading || !data) return <p>Is Loading</p>;

  if (isError) return <p>Is Error</p>;

  console.log(data);

  const enterpriseOffers = data.data;

  return (
    <ul className="flex flex-wrap items-start justify-start w-full h-full mx-auto">
      {!offers || offers.length <= 0 ? (
        <OfferCard>
          <AddOfferForm enterpriseId={enterpriseId} />
        </OfferCard>
      ) : (
        <>
          <OfferCard>
            <AddOfferForm enterpriseId={enterpriseId} />
          </OfferCard>
          {enterpriseOffers?.map((offer: Offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </>
      )}
    </ul>
  );
}
