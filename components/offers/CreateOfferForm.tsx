"use client";
import React, { useState } from "react";
import AddTechnologies from "../technologies/AddTechnologies";
import Checkboxes from "../customs/Checkboxes";
import Quiz, { QuestionElement } from "../quiz/Quiz";

export default function CreateOfferForm() {
  const [technologiesOffer, setTechnologiesOffer] = useState<string[]>([]);
  const [typesOffer, setTypesOffer] = useState<string[]>([]);
  const [questioneElements, setQuestionElements] = useState<QuestionElement[]>(
    []
  );
  const offerTypes = [
    { type: "alternance" },
    { type: "stage" },
    { type: "CDD" },
    { type: "CDI" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Coucou");
  };
  return (
    <div className="w-3/5 mx-auto ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <label htmlFor="title">Titre de l&apos;offre :</label>
        <input type="text" id="title" />
        <label htmlFor="description">Description de l&apos;offre :</label>
        <textarea id="description" className="resize-y max-h-40 min-h-[60px]" />
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
          technologiesIds={technologiesOffer}
          setTechnologiesOfferIds={setTechnologiesOffer}
        />
      </form>
    </div>
  );
}
