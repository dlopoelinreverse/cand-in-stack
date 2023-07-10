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
  const [showAddTechnologies, setShowAddTechnologies] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log("addOfferForm");
  return (
    <>
      <div>
        <h3>Ajouter une offre</h3>
        <button onClick={onOpenModal}>+</button>
      </div>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="text" placeholder="Titre de l'offre" />
          <AddTechnologies technologiesToAdd={() => {}} />
          <button type="submit">Submit</button>
        </form>
      </MyModal>
    </>
  );
}
