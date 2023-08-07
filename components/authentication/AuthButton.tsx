"use client";
import { useModal } from "@/hooks/useModal";
import Button from "../customs/Button";
import { useState } from "react";
import MyModal from "../Modals/MyModal";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";
import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuthModal";

export default function AuthButton() {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const {
    contentType,
    handleSignup,
    handleSignin,
    onSigninSwitch,
    onSignUpSwitch,
  } = useAuthModal(onOpenModal);

  return (
    <>
      <div className="flex justify-between w-1/4 gap-3 px-3">
        <Button label="S'inscrire" onClick={handleSignup} />
        <Button label="Se connecter" onClick={handleSignin} />
      </div>
      <AuthModal
        modalOpen={modalOpen}
        onCloseModal={onCloseModal}
        contentType={contentType}
        onSiginSwitch={onSigninSwitch}
        onSignupSwitch={onSignUpSwitch}
      />
    </>
  );
}
