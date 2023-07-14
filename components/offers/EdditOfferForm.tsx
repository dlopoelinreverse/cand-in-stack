import React, { useState } from "react";
import Button from "../customs/Button";
import { useModal } from "@/hooks/useModal";
import MyModal from "../Modals/MyModal";
import { Offer } from "@/app/types/types";

export default function EdditOfferForm({ offer }: { offer: Offer }) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const [editStatus, setEditStatus] = useState({
    title: { isEditing: false, data: "" },
    technologies: { isEditing: false, data: [] as string[] },
    description: { isEditing: false, data: "" },
  });
  return (
    <>
      <Button label="Editer" onClick={onOpenModal} />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col mx-auto">
          <h3>{offer.title}</h3>
        </div>
      </MyModal>
    </>
  );
}
