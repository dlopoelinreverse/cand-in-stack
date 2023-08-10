import { Offer } from "@/app/types/types";
import CustomButton from "../../customs/CustomButton";
import AddTechnologies from "@/components/technologies/AddTechnologies";
import DisplayTechnologies from "@/components/technologies/DisplayTechnologies";
import { useState } from "react";

interface EditOfferTechnologiesProps {
  offerData: Offer;
}

export default function EditOfferTechnologies({
  offerData,
}: EditOfferTechnologiesProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [technologiesIds, setTechnologiesIds] = useState(
    offerData.technologiesIds
  );
  const handleEditToggle = () => {
    setIsEditing((current) => !current);
    isEditing && setTechnologiesIds(offerData.technologiesIds);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <CustomButton
        label={isEditing ? "Annuler" : "Editer les technologies"}
        onClick={handleEditToggle}
      />
      {isEditing ? (
        <AddTechnologies
          technologiesIds={technologiesIds}
          setTechnologiesIds={setTechnologiesIds}
        />
      ) : (
        <DisplayTechnologies technologiesIds={offerData.technologiesIds} />
      )}
    </div>
  );
}
