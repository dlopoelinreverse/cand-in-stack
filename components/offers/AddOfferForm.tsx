"use client";
import useEnterpriseOffers from "@/hooks/useEnterpriseOffers";
import { useModal } from "@/hooks/useModal";
import MyModal from "../Modals/MyModal";
import AddTechnologies from "../technologies/AddTechnologies";
import React, { useState } from "react";

export default function AddOfferForm({
  enterpriseId,
}: {
  enterpriseId: string;
}) {
  const { addEnterpriseOffer } = useEnterpriseOffers(enterpriseId);
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <h3>Ajouter une offre</h3>
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200"
        >
          +
        </button>
      </div>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col items-center p-5">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="offerTitle">Titre de l&apos;offre</label>
            <input type="text" id="offerTitle" placeholder="Titre de l'offre" />
            <div>{}</div>
            <div>
              <AddTechnologies technologiesToAdd={() => {}} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </MyModal>
    </>
  );
}
