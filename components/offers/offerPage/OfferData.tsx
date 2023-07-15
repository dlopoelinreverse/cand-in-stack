import { Offer } from "@/app/types/types";
import CustomEditableElement from "@/components/customs/customEditableElement/CustomEditableElement";

interface OfferDataProps {
  offerData: Offer;
  isEditable: boolean;
}

export default function OfferData({
  offerData: offer,
  isEditable,
}: OfferDataProps) {
  return (
    <div>
      <h1>OfferData</h1>
      <CustomEditableElement isEditable={isEditable} as="h1">
        {offer.title}
      </CustomEditableElement>
      <CustomEditableElement isEditable={isEditable} as="p">
        {offer.description}
      </CustomEditableElement>
    </div>
  );
}
