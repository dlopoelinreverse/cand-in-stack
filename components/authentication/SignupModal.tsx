"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Button from "../customs/Button";
import axios from "axios";

export default function SignupModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    axios
      .post("/api/register", data)
      .then(() => onCloseModal())
      .catch(() => alert("An error occurred !"));
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/2 gap-3 ">
      <label htmlFor="lastname">Votre nom</label>
      <input
        type="text"
        id="lastname"
        className="p-2 rounded-md"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
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
        className="p-1"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {/* <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
      <input type="password" id="confirmPassword" className="p-2 rounded-md" /> */}
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
