"use client";
import { useState } from "react";
import CustomButton from "../customs/CustomButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    signIn("credentials", { ...data, redirect: false }).then(() =>
      router.refresh()
    );
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/2 gap-3">
      <label htmlFor="email">Votre email</label>
      <input
        type="email"
        id="email"
        className="p-2 rounded-md"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <label htmlFor="password">Votre mot de passe</label>
      <input
        type="password"
        id="password"
        className="p-2 rounded-md"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <div className="flex flex-col gap-3 mt-3 ">
        <CustomButton label="Se connecter" type="submit" />
        <CustomButton
          label="Se connecter avec Google"
          onClick={() => signIn("google")}
        />
      </div>
    </form>
  );
}
