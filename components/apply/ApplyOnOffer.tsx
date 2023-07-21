"use client";

import { Offer } from "@/app/types/types";
import Button from "../customs/Button";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import Questions from "../questions/Questions";

interface ApplyOnOffer {
  offer: Offer;
}

export default function ApplyOnOffer({ offer }: ApplyOnOffer) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const handleApplication = () => {};
  return (
    <div>
      <Button label="Candidater" onClick={onOpenModal} />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <>
          <h1>{offer.title}</h1>
          <Questions usage="answering" questionsOffer={offer.questions} />
          <div className="flex justify-between gap-6 my-5">
            <Button label="Candidater" onClick={handleApplication} />
            <Button label="Annuler" secondary onClick={onCloseModal} />
          </div>
        </>
      </MyModal>
    </div>
  );
}
