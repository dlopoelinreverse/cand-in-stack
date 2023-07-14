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
  const { enterpriseOffers, isLoading, isError } = useEnterpriseOffers(
    enterpriseId,
    offers
  );

  if (isLoading || !enterpriseOffers) return <p>Is Loading</p>;

  if (isError) return <p>Is Error</p>;

  return (
    <ul className="flex flex-wrap items-start justify-start w-full h-full gap-5 mx-auto mt-10">
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
