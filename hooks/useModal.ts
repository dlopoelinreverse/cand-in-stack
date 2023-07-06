import { useState } from "react";

export const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggleModal = () => setModalOpen((current) => !current);
  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);
  return { modalOpen, toggleModal, onOpenModal, onCloseModal } as const;
};
