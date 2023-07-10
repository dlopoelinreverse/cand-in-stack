"use client";

import { useState } from "react";
import TestModal from "../TestModal";
import CustomModal from "../Modals/CustomModal";
import { useModal } from "@/hooks/useModal";
import TechnologiesFilterModal from "./TechnologiesFilterModal";
import useFilters from "@/hooks/useOffersFilter";
import useAuthentication from "@/hooks/useAuthentication";
import axios from "axios";

const filterComponentModal = [
  {
    modalName: "match",
    filterComponentModal: <TestModal modalName="match" />,
  },
  {
    modalName: "technologies",
    filterComponentModal: <TechnologiesFilterModal />,
  },
  {
    modalName: "cities",
    filterComponentModal: <TestModal modalName="cities" />,
  },
  {
    modalName: "dates",
    filterComponentModal: <TestModal modalName="dates" />,
  },
];

export default function Filters() {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { filters, toggleFilters } = useFilters();
  const [modalName, setModalName] = useState("");

  const { session, status, isConnected, signOut } = useAuthentication();

  // Get the apropriate modalComponent for the modalBody
  const filterBodyModal = filterComponentModal
    .filter((filter) => filter.modalName === modalName)
    .map((filter) => filter.filterComponentModal);

  const bodyModal = [...filterBodyModal];

  const handleFilterClick = (filterId: string) => {
    if (filterId === "match") return toggleFilters(filterId);
    onOpenModal();
    setModalName(filterId);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center justify-around w-8/12 h-20 rounded-3xl bg-slate-400">
        {filters.map((filter) => (
          <button
            key={filter.filterId}
            // onClick={() => toggleFilters(filter.filterId)}
            onClick={() => handleFilterClick(filter.filterId)}
            className={`${
              filter.isActive ? "bg-emerald-300" : "bg-slate-300"
            } p-4`}
          >
            {filter.label}
          </button>
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
