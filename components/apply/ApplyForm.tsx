import React from "react";
import Button from "../customs/Button";
import { useModal } from "@/hooks/useModal";
import MyModal from "../Modals/MyModal";

export default function ApplyForm() {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  return (
    <>
      <Button label="Candidater" onClick={onOpenModal} />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <form action=""></form>
      </MyModal>
    </>
  );
}
