"use client";
import { useState } from "react";
import Button from "../customs/Button";
import { signIn } from "next-auth/react";

export default function SigninModal() {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // login logic
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/2 gap-3">
      <label htmlFor="email">Votre email</label>
      <input
        type="email"
        id="email"
        disabled={isFormDisabled}
        className="p-2 rounded-md"
      />
      <label htmlFor="password">Votre mot de passe</label>
      <input
        type="password"
        id="password"
        disabled={isFormDisabled}
        className="p-2 rounded-md"
      />
      <div className="flex flex-col gap-3 mt-3 ">
        <Button label="Se connecter" type="submit" />
        <Button
          label="Se connecter avec Google"
          onClick={() => signIn("google")}
        />
      </div>
    </form>
  );
}
