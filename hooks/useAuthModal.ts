import { useState } from "react";

export default function useAuthModal(onOpenModal: () => void) {
  const [contentType, setContentType] = useState("");
  const handleSignup = () => {
    setContentType("signup");
    onOpenModal();
  };
  const handleSignin = () => {
    setContentType("signin");
    onOpenModal();
  };

  const onSigninSwitch = () => {
    setContentType("signin");
  };

  const onSignUpSwitch = () => {
    setContentType("signup");
  };

  return {
    contentType,
    handleSignup,
    handleSignin,
    onSigninSwitch,
    onSignUpSwitch,
  };
}
