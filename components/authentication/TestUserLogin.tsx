"use client";

import { signIn } from "next-auth/react";
import CustomButton from "../customs/CustomButton";
import { useRouter } from "next/navigation";

export default function TestUserLogin() {
  const router = useRouter();
  const usersData = [
    {
      name: "Jean",
      role: "Candidat",
      credentials: {
        email: "jean@gmail.com",
        password: "Le Jean33",
      },
    },
    {
      name: "CornerIdeas",
      role: "Entreprise",
      credentials: {
        email: "corner@ideas.com",
        password: "That Kind 0f 1d34s",
      },
    },
  ];

  const handleLogin = (userData: { email: string; password: string }) => {
    signIn("credentials", { ...userData, redirect: false }).then(() =>
      router.refresh()
    );
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="font-semibold">
        Se connecter avec les utilisateurs test :{" "}
      </h3>
      <ul className="flex flex-col items-center gap-4 mb-4">
        {usersData.map((user) => (
          <li key={user.name}>
            <CustomButton
              label={`${user.name}, role : ${user.role}`}
              onClick={() => handleLogin(user.credentials)}
              additionalStyle="mx-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
