"use client";
import { Offer } from "@/app/types/types";
import ApplyOnOffer from "@/components/apply/ApplyOnOffer";
import ContentDisplayer, {
  ContentElement,
} from "@/components/customs/contentDisplayer/ContentDisplayer";
import DisplayTechnologies from "@/components/technologies/DisplayTechnologies";
import useOffer from "@/hooks/useOffer";
import { User } from "@prisma/client";
import { nanoid } from "nanoid";
import EditOfferTechnologies from "./EditOfferTechnologies";

interface OfferDataProps {
  offerServerData: Offer;
  enterpriseData: User;
  isCurrentEnterpriseOffer: boolean;
  isAuthenticatedUser: boolean;
  userRole: string | undefined;
}

export default function OfferData({
  offerServerData: offer,
  enterpriseData,
  isCurrentEnterpriseOffer,
  isAuthenticatedUser,
  userRole,
}: OfferDataProps) {
  const { offerData, isLoading, isError, updateOffer } = useOffer(
    offer,
    offer.id
  );

  if (isLoading) return <p>OfferData Loading</p>;
  if (isError) return <p>OfferData Error</p>;
  const contentOffer: ContentElement[] = [
    {
      key: nanoid(),
      label: {
        htmlFor: "title",
        content: "Titre de l'offre : ",
      },
      elementLength: "short",
      elementType: "text",
      value: offerData.title,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
  ];
  const handleUpdateOfferData = (updatedData: {}) => {
    updateOffer.mutate(updatedData);
  };
  return (
    <div className="">
      <ContentDisplayer
        contentElements={contentOffer}
        isEditable={isCurrentEnterpriseOffer}
        updateData={handleUpdateOfferData}
        onSuccessUpdate={updateOffer.isSuccess}
      />
      {isCurrentEnterpriseOffer ? (
        <EditOfferTechnologies offerData={offerData} />
      ) : (
        <DisplayTechnologies technologiesIds={offer.technologiesIds} />
      )}
      {userRole === "USER" && isAuthenticatedUser && (
        <ApplyOnOffer offer={offer} />
      )}
      {!isAuthenticatedUser && (
        <p>
          Affin de candidater à cette offre, merci de vous connecter ou de vous
          créer un compte utilisateur.
        </p>
      )}
    </div>
  );
}
