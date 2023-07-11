"use client";
import { signOut } from "next-auth/react";
import Button from "../Customs/Button";

export default function LogoutButton() {
  return <Button label="Se déconnecter" onClick={() => signOut()} />;
}
