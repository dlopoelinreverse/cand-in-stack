import { OfferApplyDataType } from "@/app/types/types";
import Button from "../customs/Button";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import CandidateData from "./CandidateData";

interface CandidatesList {
  applies: OfferApplyDataType[];
}

export default function CandidatesList({ applies }: CandidatesList) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();

  const appliesCount = applies.length;

  return (
    <>
      <Button
        label={`${
          appliesCount > 0
            ? `${appliesCount} candidat${appliesCount > 1 ? "s" : ""}`
            : `Aucun candidat`
        }`}
        onClick={onOpenModal}
      />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <ul className="">
          {applies.map((apply) => (
            <CandidateData key={apply.applyId} apply={apply} />
          ))}
        </ul>
      </MyModal>
    </>
  );
}
