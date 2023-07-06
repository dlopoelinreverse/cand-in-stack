"use client";

import { useState } from "react";
import CustomButton from "../CustomButton";
import TestModal from "../TestModal";
import CustomModal from "../Modals/CustomModal";
import { useModal } from "@/hooks/useModal";
import TechnologiesFilterModal from "./TechnologiesFilterModal";

const filters = [
  {
    label: "Match",
    filterComponentModal: <TestModal modalName="match" />,
    modalName: "match",
  },
  {
    label: "Technologies",
    filterComponentModal: <TechnologiesFilterModal />,
    modalName: "technologies",
  },
  {
    label: "Villes",
    filterComponentModal: <TestModal modalName="cities" />,
    modalName: "cities",
  },
  {
    label: "Dates",
    filterComponentModal: <TestModal modalName="dates" />,
    modalName: "dates",
  },
];

export default function Filters() {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const [modalName, setModalName] = useState("");
  const filterBodyModal = filters
    .filter((filter) => filter.modalName === modalName)
    .map((filter) => filter.filterComponentModal);

  const bodyModal = [...filterBodyModal];

  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center justify-around w-8/12 h-20 rounded-3xl bg-slate-400">
        {filters.map((filter) => (
          <CustomButton
            key={filter.label}
            actionLabel={filter.label}
            large
            fullWidth
            additionnalStyle="mx-3"
            onClick={() => {
              setModalName(filter.modalName);
              onOpenModal();
            }}
          />
        ))}
      </div>

      <CustomModal
        isOpen={modalOpen}
        onClose={onCloseModal}
        body={bodyModal[0]}
      />
    </div>
  );
}
