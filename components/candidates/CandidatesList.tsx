import { OfferApplyDataType } from "@/app/types/types";
import CustomButton from "../customs/CustomButton";
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
      <CustomButton
        label={`${
          appliesCount > 0
            ? `${appliesCount} candidat${appliesCount > 1 ? "s" : ""}`
            : `Aucun candidat`
        }`}
        onClick={onOpenModal}
      />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <ul className="w-full">
          {applies.map((apply) => (
            <CandidateData key={apply.applyId} apply={apply} />
          ))}
        </ul>
      </MyModal>
    </>
  );
}
