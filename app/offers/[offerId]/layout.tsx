import { prisma } from "@/app/libs/prismadb";
import ProfileBox from "@/components/profile/ProfileBox";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

interface OfferIdLayoutProps {
  children: ReactElement;

  params: {
    offerId: string;
  };
}

export default async function OfferIdLayout({
  children,
  params,
}: OfferIdLayoutProps) {
  const { offerId } = params;

  try {
    const isOfferIdValid = await prisma.offer.findFirst({
      where: { id: offerId },
    });

    if (!isOfferIdValid) return redirect("/");
  } catch {
    return redirect("/");
  }

  const findCreatorId = await prisma.offer.findUnique({
    where: { id: offerId },
    select: { creatorId: true },
  });

  const creatorId = findCreatorId?.creatorId;

  const enterpriseData = await prisma.user.findUnique({
    where: { id: creatorId },
    select: {
      id: true,
      name: true,
      image: true,
      email: true,
    },
  });

  if (!enterpriseData) return;

  return (
    <div className="flex w-full">
      <div className="w-2/3">{children}</div>
      <div className="w-1/3">
        <ProfileBox userData={enterpriseData} />
      </div>
    </div>
  );
}
