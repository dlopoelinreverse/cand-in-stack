"use client";
import { useModal } from "@/hooks/useModal";
import Button from "../Customs/Button";
import { useState } from "react";
import MyModal from "../Modals/MyModal";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";

export default function AuthButton() {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const [contentType, setContentType] = useState("");

  const handleSignup = () => {
    setContentType("signup");
    onOpenModal();
  };
  const handleSignin = () => {
    setContentType("signin");
    onOpenModal();
  };

  return (
    <>
      <div className="flex justify-between w-1/4 px-3">
        <Button label="S'inscrire" onClick={handleSignup} />
        <Button label="Se connecter" onClick={handleSignin} />
      </div>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col items-center p-5">
          {contentType === "signup" && (
            <>
              <SignupModal />
              <p className="mt-3">
                Vous avez déjà un compte ?{" "}
                <span
                  onClick={() => setContentType("signin")}
                  className="text-blue-600 underline cursor-pointer"
                >
                  Se connecter
                </span>
              </p>
            </>
          )}
          {contentType === "signin" && (
            <>
              <SigninModal />
              <p className="mt-3">
                Vous n&apos;avez pas encore de compte ?{" "}
                <span
                  onClick={() => setContentType("signup")}
                  className="text-blue-600 underline cursor-pointer"
                >
                  S&apos;inscrire
                </span>
              </p>
            </>
          )}
        </div>
      </MyModal>
    </>
  );
}
