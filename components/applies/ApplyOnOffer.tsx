"use client";

import { AnswerType, Offer } from "@/app/types/types";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import Questions from "../questions/Questions";
import { useEffect, useState } from "react";
import useCandidateApply from "@/hooks/useCandiateApply";
import { redirect, useRouter } from "next/navigation";
import CustomButton from "../customs/CustomButton";

interface ApplyOnOffer {
  offer: Offer;
}

export default function ApplyOnOffer({ offer }: ApplyOnOffer) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { candiateApplies, createApply } = useCandidateApply();
  const router = useRouter();
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
    if (createApply.isSuccess) {
      router.refresh();
      redirect("/applies");
    }
  }, [createApply.isSuccess, router]);

  return (
    <div>
      <CustomButton
        label="Candidater"
        onClick={onOpenModal}
        disabled={isAlereadyApplied}
      />
      <MyModal isOpen={modalOpen} onClose={handleCancel}>
        <>
          <h1>{offer.title}</h1>
          <Questions
            usage="answering"
            questionsOffer={offer.questions}
            setAnswers={setAnswers}
          />
          <div className="flex justify-between gap-6 my-5">
            <CustomButton label="Candidater" onClick={handleApplication} />
            <CustomButton label="Annuler" secondary onClick={handleCancel} />
          </div>
        </>
      </MyModal>
    </div>
  );
}
