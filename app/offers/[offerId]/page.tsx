import React from "react";

export default function OfferPage(context: { params: { offerId: string } }) {
  const { offerId } = context.params;
  return <div>OfferPage de {offerId}</div>;
}
