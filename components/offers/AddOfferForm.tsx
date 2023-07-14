"use client";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import { useModal } from "@/hooks/useModal";
import MyModal from "../Modals/MyModal";
import AddTechnologies from "../technologies/AddTechnologies";
import React, { useState } from "react";
import Button from "../customs/Button";

export default function AddOfferForm({
  enterpriseId,
}: {
  enterpriseId: string;
}) {
  const { addEnterpriseOffer } = useEnterpriseOffers(enterpriseId);
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const [technologiesOffer, setTechnologiesOffer] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("titleOffer");
    const description = data.get("descriptionOffer");
    const newOfferData = {
      title: String(title),
      technologiesIds: technologiesOffer,
      description: String(description),
    };
    console.log(newOfferData);
    addEnterpriseOffer.mutate({
      enterpriseId,
      newOfferData,
      closeModal: onCloseModal,
    });
  };
  console.log("render");
  return (
    <>
      <div
        //  className="flex flex-col items-center justify-center w-full h-full "
        className="flex flex-col items-center justify-center "
      >
        <h3>Ajouter une offre</h3>
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200"
        >
          +
        </button>
      </div>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col items-center p-5 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="title">Titre de l&apos;offre</label>
            <input
              type="text"
              id="title"
              name="titleOffer"
              placeholder="Titre de l'offre"
            />
            <AddTechnologies
              // technologiesIds={offerData.technologiesIds}
              // setTechnologiesOfferIds={setOfferData}
              technologiesIds={technologiesOffer}
              setTechnologiesOfferIds={setTechnologiesOffer}
            />
            <label htmlFor="description">Description de l&apos;offre</label>
            <textarea
              id="description"
              name="descriptionOffer"
              className="resize-y min-h-[50px] max-h-32 my-3"
            />
            <Button
              label="Valider l'offre"
              type="submit"
              additionalStyle="mx-auto"
            />
          </form>
        </div>
      </MyModal>
    </>
  );
}
