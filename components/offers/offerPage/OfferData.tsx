import { Offer } from "@/app/types/types";
import ApplyOnOffer from "@/components/apply/ApplyOnOffer";
import ContentDisplayer, {
  ContentElement,
} from "@/components/customs/contentDisplayer/ContentDisplayer";
import CustomEditableElement from "@/components/customs/customEditableElement/CustomEditableElement";
import DisplayTechnologies from "@/components/technologies/DisplayTechnologies";
import { User } from "@prisma/client";
import { nanoid } from "nanoid";

interface OfferDataProps {
  offerData: Offer;
  enterpriseData: User;
  isCurrentEnterpriseOffer: boolean;
  isAuthenticatedUser: boolean;
  userRole: string | undefined;
}

export default function OfferData({
  offerData: offer,
  enterpriseData,
  isCurrentEnterpriseOffer,
  isAuthenticatedUser,
  userRole,
}: OfferDataProps) {
  const contentOffer: ContentElement[] = [
    {
      key: nanoid(),
      label: {
        htmlFor: "title",
        content: "Titre de l'offre : ",
      },
      elementLength: "short",
      elementType: "text",
      value: offer.title,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
  ];
  return (
    <div className="">
      <ContentDisplayer
        contentElements={contentOffer}
        isEditable={isCurrentEnterpriseOffer}
      />
      {/* <CustomEditableElement isEditable={isCurrentEnterpriseOffer} as="h1">
        {offer.title}
      </CustomEditableElement>
      <CustomEditableElement isEditable={isCurrentEnterpriseOffer} as="p">
        {offer.description}
      </CustomEditableElement> */}
      <DisplayTechnologies technologyIds={offer.technologiesIds} />
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
