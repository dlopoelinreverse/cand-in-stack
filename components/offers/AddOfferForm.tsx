"use client";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import { useModal } from "@/hooks/useModal";
import MyModal from "../Modals/MyModal";
import AddTechnologies from "../technologies/AddTechnologies";
import React, { useState } from "react";
import Button from "../customs/Button";
import { useRouter } from "next/navigation";

export type OfferDataType = {
  title: string;
  technologiesIds: string[];
  description: string;
};

export default function AddOfferForm({
  enterpriseId,
}: {
  enterpriseId: string;
}) {
  const { addEnterpriseOffer } = useEnterpriseOffers(enterpriseId);
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const router = useRouter();
  const [offerData, setOfferData] = useState<OfferDataType>({
    title: "",
    technologiesIds: [],
    description: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addEnterpriseOffer.mutate({
      enterpriseId,
      newOfferData: offerData,
      closeModal: onCloseModal,
    });
  };

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
              placeholder="Titre de l'offre"
              value={offerData.title}
              onChange={(event) =>
                setOfferData((current) => {
                  return { ...current, title: event.target.value };
                })
              }
            />
            <AddTechnologies
              technologiesIds={offerData.technologiesIds}
              setTechnologiesOfferIds={setOfferData}
            />
            <label htmlFor="description">Description de l&apos;offre</label>
            <textarea
              id="description"
              className="resize-y min-h-[50px] max-h-32 my-3"
              value={offerData.description}
              onChange={(event) =>
                setOfferData((current) => {
                  return { ...current, description: event.target.value };
                })
              }
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
