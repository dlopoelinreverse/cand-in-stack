"use client";

import { Offer } from "@/app/types/types";
import Button from "../customs/Button";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";

interface ApplyOnOffer {
  offer: Offer;
}

export default function ApplyOnOffer({ offer }: ApplyOnOffer) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  return (
    <div>
      <Button label="Candidater" onClick={onOpenModal} />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <>
          <h1></h1>
        </>
      </MyModal>
    </div>
  );
}
