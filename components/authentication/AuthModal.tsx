import React from "react";
import MyModal from "../Modals/MyModal";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import { useSession } from "next-auth/react";

interface AuthModalProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  contentType: string;
  onSiginSwitch: () => void;
  onSignupSwitch: () => void;
}

export default function AuthModal({
  modalOpen,
  onCloseModal,
  contentType,
  onSiginSwitch,
  onSignupSwitch,
}: AuthModalProps) {
  return (
    <MyModal isOpen={modalOpen} onClose={onCloseModal}>
      <div className="flex flex-col items-center p-5">
        {contentType === "signup" && (
          <>
            <SignupModal />
            <p className="mt-3">
              Vous avez déjà un compte ?{" "}
              <span
                onClick={onSiginSwitch}
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
                onClick={onSignupSwitch}
                className="text-blue-600 underline cursor-pointer"
              >
                S&apos;inscrire
              </span>
            </p>
          </>
        )}
      </div>
    </MyModal>
  );
}
