"use client";
import { useModal } from "@/hooks/useModal";
import CustomButton from "../customs/CustomButton";
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
        <CustomButton label="S'inscrire" onClick={handleSignup} />
        <CustomButton label="Se connecter" onClick={handleSignin} />
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
