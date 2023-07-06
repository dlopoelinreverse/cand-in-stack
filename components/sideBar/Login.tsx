"use client";

import { useModal } from "@/hooks/useModal";
import CustomModal from "../Modals/CustomModal";
import { useState } from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  const { modalOpen, toggleModal, onCloseModal } = useModal();
  const [modalMode, setModalMode] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    verifypassword: "",
  });

  const handleRegisterClick = () => {
    setModalMode("register");
    toggleModal();
  };
  const handleLoginClick = () => {
    setModalMode("login");
    toggleModal();
  };

  const handleCloseModal = () => {
    onCloseModal();
    setModalMode("");
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      verifypassword: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCloseModal();
    console.log(data);
  };

  const modalBody = (
    <div className="flex flex-col items-center">
      {modalMode === "register" && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="firstname" />
          <input
            type="text"
            id="firstname"
            placeholder="Prénom"
            required
            value={data.firstname}
            onChange={(event) =>
              setData({ ...data, firstname: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <label htmlFor="lastname" />
          <input
            type="text"
            id="lastname"
            placeholder="Nom"
            required
            value={data.lastname}
            onChange={(event) =>
              setData({ ...data, lastname: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            required
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <label htmlFor="verifypassword" />
          <input
            type="password"
            id="verifypassword"
            placeholder="Confirmer le mot de passe"
            required
            value={data.verifypassword}
            onChange={(event) =>
              setData({ ...data, verifypassword: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <div className="flex justify-end mt-2">
            <CustomButton buttonType="submit" actionLabel="S'inscrire" />
          </div>
        </form>
      )}
      {modalMode === "login" && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={data.email}
            onChange={(event) =>
              setData({ ...data, firstname: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            required
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
            className="p-3 rounded-full"
          />
          <div className="flex justify-end mt-2">
            <CustomButton buttonType="submit" actionLabel="Se connecter" />
          </div>
        </form>
      )}
    </div>
  );

  const modalFooter = (
    <>
      {modalMode === "register" && (
        <p className="text-center">
          Vous avez déjà un compte ?{" "}
          <span
            className="underline cursor-pointer text-sky-500"
            onClick={() => setModalMode("login")}
          >
            Se connecter
          </span>
        </p>
      )}
      {modalMode === "login" && (
        <p className="text-center">
          Vous n&apos;avez pas encore de compte ?{" "}
          <span
            className="underline cursor-pointer text-sky-500"
            onClick={() => setModalMode("register")}
          >
            S&apos;inscrire
          </span>
        </p>
      )}
    </>
  );
  return (
    <>
      <div className="flex">
        <CustomButton
          onClick={() => signIn("google")}
          actionLabel="Connexion avec Google"
          secondary
        />
        <div className="flex flex-col items-center gap-2">
          <CustomButton
            onClick={handleRegisterClick}
            actionLabel="S'inscrire"
            secondary
            fullWidth
          />
          <CustomButton
            onClick={handleLoginClick}
            actionLabel="Se connecter"
            secondary
            fullWidth
          />
        </div>
      </div>
      <CustomModal
        isOpen={Boolean(modalOpen)}
        onClose={handleCloseModal}
        body={modalBody}
        footer={modalFooter}
      />
    </>
  );
}
