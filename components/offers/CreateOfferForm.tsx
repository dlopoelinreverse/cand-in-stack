"use client";
import { useState } from "react";
import Form from "../customs/Form";
import AddTechnologies from "../technologies/AddTechnologies";

interface CreateOfferFormProps {
  userId: string;
}

export default function CreateOfferForm({ userId }: CreateOfferFormProps) {
  const [technologiesOffer, setTechnologiesOffer] = useState<string[]>([]);
  const formContent = [
    {
      key: 1,
      as: "input",
      type: "text",
      placeholder: "Titre de l'offre",
    },
    {
      key: 2,
      as: "textarea",
      label: "Description de l'offre",
      labelId: "description",
      placeholder: "Description de l'offre",
      disposition: "flex flex-col",
    },
    {
      key: 3,
      as: "input",
      type: "checkbox",
      label: "Alternance",
      labelId: "alternanceCheckbox",
      disposition: "flex gap-2",
    },
  ];
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Coucou");
  };
  return (
    <div className="flex flex-col w-3/5 gap-3 mx-auto">
      <Form
        handleSubmit={handleSubmit}
        formContent={formContent}
        className="flex flex-col w-3/5 gap-3 mx-auto"
      />
      <AddTechnologies
        technologiesIds={technologiesOffer}
        setTechnologiesOfferIds={setTechnologiesOffer}
      />
    </div>
  );
}
