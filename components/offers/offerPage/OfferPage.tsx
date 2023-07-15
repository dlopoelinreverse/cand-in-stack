import { Offer } from "@/app/types/types";
import ProfileBox from "@/components/profileBox/ProfileBox";
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
      <div className="flex flex-col w-2/3 bg-opacity-25 bg-slate-500">
        <OfferData
          offerData={offerData}
          isEditable={isCurrentEnterpriseOffer}
        />
      </div>
      <div className="flex flex-col w-1/3 bg-opacity-25 bg-slate-900">
        <ProfileBox userData={enterpriseData} />
      </div>
    </div>
  );
}
