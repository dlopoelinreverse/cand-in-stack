import { Offer } from "@/app/types/types";
import { User } from "@prisma/client";
import OfferData from "./OfferData";

interface OfferPageProps {
  offerData: Offer;
  enterpriseData: User;
  isCurrentEnterpriseOffer: boolean;
  isUnauthenticatedUser: boolean;
  userRole: string | undefined;
}

export default function OfferPage({
  offerData,
  enterpriseData,
  isCurrentEnterpriseOffer,
  isUnauthenticatedUser,
  userRole,
}: OfferPageProps) {
  return (
    <div className="flex w-full mx-auto">
      <OfferData offerData={offerData} isEditable={isCurrentEnterpriseOffer} />
    </div>
  );
}
