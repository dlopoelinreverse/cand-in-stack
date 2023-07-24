"use client";

import { AnswerType, Offer } from "@/app/types/types";
import Button from "../customs/Button";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import Questions from "../questions/Questions";
import { useEffect, useState } from "react";
import useCandidateApply from "@/hooks/useCandiateApply";
import { redirect } from "next/navigation";

interface ApplyOnOffer {
  offer: Offer;
}

export default function ApplyOnOffer({ offer }: ApplyOnOffer) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { candiateApplies, createApply } = useCandidateApply();
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

  const isAlereadyApplied = Boolean(
    candiateApplies?.find((apply) => apply.offerId === offer.id)
  );

  useEffect(() => {
    if (createApply.isSuccess) redirect("/applies");
  }, [createApply.isSuccess]);

  return (
    <div>
      <Button
        label="Candidater"
        onClick={onOpenModal}
        disabled={isAlereadyApplied}
      />
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
