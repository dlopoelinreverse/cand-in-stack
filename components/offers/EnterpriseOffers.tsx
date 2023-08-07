"use client";

import { Offer } from "@/app/types/types";
import OfferCard from "./OfferCard";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import Link from "next/link";

export default function EnterpriseOffers({
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
    <ul className="flex flex-wrap items-start justify-start w-full h-full gap-5 mx-auto mt-10">
      {!offers || offers.length <= 0 ? (
        <OfferCard>
          <>
            <h3>Ajouter une offre</h3>
            <p>+</p>
          </>
        </OfferCard>
      ) : (
        <>
          <OfferCard>
            <>
              <h3>Ajouter une offre</h3>
              <p>+</p>
            </>
          </OfferCard>
          {enterpriseOffers?.map((offer: Offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </>
      )}
    </ul>
  );
}
