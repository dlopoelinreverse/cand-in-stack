import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { prisma } from "../libs/prismadb";
import AddOfferForm from "@/components/offers/AddOfferForm";
import OffersDisplay from "@/components/offers/OffersDisplay";

export default async function CurrentEnterpriseOfferPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ENTERPRISE") return redirect("/");

  const offers = await prisma.offer.findMany({
    where: { creatorId: session.user.id },
    take: 10,
    orderBy: { createdAt: "desc" },
  });

  if (offers.length <= 0)
    return <AddOfferForm enterpriseId={session.user.id} />;

  return <OffersDisplay offers={offers} enterpriseId={session.user.id} />;
}
