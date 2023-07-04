"use client";
import useAuthModal from "@/hooks/useAuthModal";
import useAuthentication from "@/hooks/useAuthentication";

export default function AuthButton() {
  const { isConnected, signOut, status } = useAuthentication();
  const { onOpen } = useAuthModal();

  if (status === "loading") return null;

  if (!isConnected) return <button onClick={onOpen}>Connexion</button>;

  return <button onClick={() => signOut()}>Déconnexion</button>;
}
