"use client";
import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
import MyModal from "../../../Modals/MyModal";
import ShowFiltersModal from "./Technologies";
import AddFilterModal from "./AddFilterForm";
import useFilters from "@/hooks/useTechnology";
import useTechnology from "@/hooks/useTechnology";
import Technologies from "./Technologies";
import EditFiltersModal from "./EditFiltersModal";

export default function ManageFilters() {
  const [modalStatus, setModalStatus] = useState({
    manageFilters: true,
    addFilterForm: false,
    editFilters: false,
  });
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const handleCloseModal = () => {
    setModalStatus({
      manageFilters: true,
      addFilterForm: false,
      editFilters: false,
    });
    onCloseModal();
  };

  const showBackManageFilter = () => {
    setModalStatus({
      manageFilters: true,
      addFilterForm: false,
      editFilters: false,
    });
  };

  const showAddFilterForm = () => {
    setModalStatus({
      manageFilters: false,
      addFilterForm: true,
      editFilters: false,
    });
  };
  const showEditFiltersModal = () => {
    setModalStatus({
      manageFilters: false,
      addFilterForm: false,
      editFilters: true,
    });
  };
  return (
    <>
      <h1>ManageFilters</h1>
      <button onClick={onOpenModal}>Filtres</button>
      <MyModal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col items-center p-4 ">
          {modalStatus.manageFilters && (
            <>
              <Technologies />
              <div className="flex max-w-full gap-2 p-5 mx-14">
                <button
                  onClick={showAddFilterForm}
                  className="px-6 py-3 bg-slate-300"
                >
                  Ajouter un filtre
                </button>
                <button
                  onClick={showEditFiltersModal}
                  className="px-6 py-3 bg-slate-300"
                >
                  Editer les filtres
                </button>
              </div>
            </>
          )}
          {modalStatus.addFilterForm && (
            <AddFilterModal cancel={showBackManageFilter} />
          )}
          {modalStatus.editFilters && (
            <EditFiltersModal cancel={showBackManageFilter} />
          )}
        </div>
      </MyModal>
    </>
  );
}
