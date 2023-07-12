"use client";
import { signOut } from "next-auth/react";
import Button from "../customs/Button";

export default function LogoutButton() {
  return <Button label="Se déconnecter" onClick={() => signOut()} />;
}
