import { useState } from "react";

interface useModal {
  modalOpen: boolean;
  toggleModal: () => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const useModal = (initialMode: boolean = false): useModal => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggleModal = () => setModalOpen((current) => !current);
  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);

  return { modalOpen, toggleModal, onOpenModal, onCloseModal };
};
