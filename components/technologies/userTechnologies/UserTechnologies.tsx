"use client";
import useTechnology from "@/hooks/useTechnology";
import AddTechnologies from "../AddTechnologies";
import { useState } from "react";
import DisplayTechnologies from "../DisplayTechnologies";
import useUser from "@/hooks/useUser";
import AddUserTechnologies from "./AddUserTechnologies";

interface UserTechnologiesProps {
  isEditable: boolean;
}

export default function UserTechnologies({
  isEditable,
}: UserTechnologiesProps) {
  const { userTechnologies, userTechnoLoading, userTechnoError } = useUser();
  // create route user technologies, get userTechnologesIds into the Json[] => {Certified:{By, date} , technologyId: string}
  if (userTechnoLoading || !userTechnologies) return <p>Loading...</p>;
  if (userTechnoError) return <p>Error</p>;

  return (
    <div className="flex flex-col ">
      {isEditable ? (
        <AddUserTechnologies
          userTechnologies={userTechnologies.userTechnologies}
        />
      ) : (
        <DisplayTechnologies
          technologyIds={userTechnologies.userTechnologies}
        />
      )}
    </div>
  );
}
