"use client";
import { signOut } from "next-auth/react";
import CustomButton from "../customs/CustomButton";

export default function LogoutButton() {
  return <CustomButton label="Se déconnecter" onClick={() => signOut()} />;
}
