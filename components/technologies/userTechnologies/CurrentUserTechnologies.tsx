"use client";
import React from "react";
import AddUserTechnologies from "./AddUserTechnologies";
import { User } from "@prisma/client";
import useUser from "@/hooks/useUser";

export default function CurrentUserTechnologies({
  userServerData,
}: {
  userServerData: User;
}) {
  const { userTechnologies, userTechnoLoading, userTechnoError } =
    useUser(userServerData);
  // create route user technologies, get userTechnologesIds into the Json[] => {Certified:{By, date} , technologyId: string}
  if (userTechnoLoading || !userTechnologies) return <p>Loading...</p>;
  if (userTechnoError) return <p>Error</p>;
  return (
    <div className="flex flex-col ">
      <AddUserTechnologies
        userTechnologies={userTechnologies.userTechnologies}
      />
    </div>
  );
}
