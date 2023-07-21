"use client";

import { AnswerType, Offer } from "@/app/types/types";
import Button from "../customs/Button";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import Questions from "../questions/Questions";
import { useState } from "react";
import useApply from "@/hooks/useApply";

interface ApplyOnOffer {
  offer: Offer;
}

export default function ApplyOnOffer({ offer }: ApplyOnOffer) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { candiateApplies, createApply } = useApply();
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const handleApplication = () => {
    createApply.mutate({
      offerId: offer.id,
      enterpriseId: offer.creatorId,
      answers,
    });
  };

  const handleCancel = () => {
    onCloseModal(), setAnswers([]);
  };
  return (
    <div>
      <Button label="Candidater" onClick={onOpenModal} />
      <MyModal isOpen={modalOpen} onClose={handleCancel}>
        <>
          <h1>{offer.title}</h1>
          <pre>{JSON.stringify(candiateApplies)}</pre>
          <Questions
            usage="answering"
            questionsOffer={offer.questions}
            setAnswers={setAnswers}
          />
          <div className="flex justify-between gap-6 my-5">
            <Button label="Candidater" onClick={handleApplication} />
            <Button label="Annuler" secondary onClick={handleCancel} />
          </div>
        </>
      </MyModal>
    </div>
  );
}
