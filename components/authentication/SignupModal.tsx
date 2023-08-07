"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Button from "../customs/Button";

export default function SignupModal() {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // register logic
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/2 gap-3 ">
      <label htmlFor="firstname">Votre prénom</label>
      <input
        type="text"
        id="firstname"
        disabled={isFormDisabled}
        className="p-2 rounded-md"
      />
      <label htmlFor="lastname">Votre nom</label>
      <input
        type="email"
        id="lastname"
        disabled={isFormDisabled}
        className="p-2 rounded-md"
      />
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
        className="p-1"
      />
      <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
      <input
        type="password"
        id="confirmPassword"
        disabled={isFormDisabled}
        className="p-2 rounded-md"
      />
      <div className="flex flex-col gap-3 mt-3 ">
        <Button label="S'inscrire" type="submit" />
        <Button
          label="S'inscrire avec Google"
          onClick={() => signIn("google")}
        />
      </div>
    </form>
  );
}
