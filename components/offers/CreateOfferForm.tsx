"use client";
import React, { useState } from "react";
import AddTechnologies from "../technologies/AddTechnologies";
import Checkboxes from "../customs/Checkboxes";
import Quiz, { QuestionElement } from "./quiz/Quiz";
import Button from "../customs/Button";
import { useRouter } from "next/navigation";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";

export default function CreateOfferForm({ userId }: { userId: string }) {
  const { addEnterpriseOffer } = useEnterpriseOffers(userId);
  const [technologiesOfferIds, setTechnologiesOfferIds] = useState<string[]>(
    []
  );
  const [typesOffer, setTypesOffer] = useState<string[]>([]);
  const [questioneElements, setQuestionElements] = useState<QuestionElement[]>(
    []
  );
  const router = useRouter();
  const offerTypes = [
    { type: "alternance" },
    { type: "stage" },
    { type: "CDD" },
    { type: "CDI" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const city = data.get("city");
    const questions = questioneElements.map((element) => element.value);
    const newOfferData = {
      title: String(title),
      description: String(description),
      city: String(city),
      jobType: typesOffer,
      questions,
      technologiesIds: technologiesOfferIds,
    };
    addEnterpriseOffer.mutate({ enterpriseId: userId, newOfferData });
  };
  return (
    <div className="w-3/5 mx-auto mb-10 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <label htmlFor="titleOffer">Titre de l&apos;offre :</label>
        <input
          type="text"
          id="titleOffer"
          name="title"
          className="p-2"
          required
        />
        <label htmlFor="descriptionOffer">Description de l&apos;offre :</label>
        <textarea
          id="descriptionOffer"
          name="description"
          className="resize-y max-h-40 min-h-[60px] p-2"
          required
        />
        <label htmlFor="cityOffer">Ville :</label>
        <input
          type="text"
          id="cityOffer"
          name="city"
          className="p-2"
          required
        />
        <label>
          Type d&apos;offre :
          <Checkboxes
            checkboxesValues={offerTypes}
            setCheckedBoxes={setTypesOffer}
            className="flex flex-wrap justify-center gap-5 mt-5"
          />
        </label>
        <Quiz
          questionElements={questioneElements}
          setQuestionElements={setQuestionElements}
        />
        <AddTechnologies
          technologiesIds={technologiesOfferIds}
          setTechnologiesIds={setTechnologiesOfferIds}
        />
        <div className="flex justify-end gap-5 mt-6">
          <Button label="Créer une offre" type="submit" />
          <Button label="Annuler" secondary onClick={() => router.push("/")} />
        </div>
      </form>
    </div>
  );
}
