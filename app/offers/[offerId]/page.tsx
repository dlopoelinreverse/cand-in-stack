import { prisma } from "@/app/libs/prismadb";
import Offer from "@/components/offers/offerPage/OfferPage";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function OfferPage(context: {
  params: { offerId: string };
}) {
  const session = await getServerSession(authOptions);

  const { offerId } = context.params;

  if (!offerId) return;

  const offerData = await prisma.offer.findFirst({ where: { id: offerId } });

  if (!offerData) return;

  const enterpriseData = await prisma.user.findFirst({
    where: { id: offerData.creatorId },
  });

  if (!enterpriseData) return;

  const isCurrentEnterpriseOffer = session?.user.id === offerData?.creatorId;

  const isUnauthenticatedUser = !session;

  const userRole = session?.user.role;

  return (
    <Offer
      offerData={offerData}
      enterpriseData={enterpriseData}
      isCurrentEnterpriseOffer={isCurrentEnterpriseOffer}
      isUnauthenticatedUser={isUnauthenticatedUser}
      userRole={userRole}
    />
  );
}
