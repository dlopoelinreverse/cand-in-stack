"use client";
import React from "react";
import CustomModal from "./CustomModal";
import useAuthModal from "@/hooks/useAuthModal";
import { signIn } from "next-auth/react";

export default function AuthModal() {
  const { isOpen, onOpen, onClose } = useAuthModal();

  const body = (
    <button
      onClick={() => signIn("google")}
      className="max-w-[300px] rounded-md shadow-md hover:bg-slate-300 transition p-5 bg-slate-400"
    >
      Se connecter avec Google
    </button>
  );

  return (
    <div>
      <CustomModal isOpen={isOpen} onClose={onClose} body={body} />
    </div>
  );
}
