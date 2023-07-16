"use client";
import useTechnology from "@/hooks/useTechnology";
import AddTechnologies from "../AddTechnologies";
import { useState } from "react";
import DisplayTechnologies from "../DisplayTechnologies";

interface UserTechnologiesProps {
  isEditable: boolean;
}

export default function UserTechnologies({
  isEditable,
}: UserTechnologiesProps) {
  const [userTechnologiesIds, setUserTechnologiesIds] = useState<string[]>([]);
  const { technologies } = useTechnology();
  // create route user technologies, get userTechnologesIds into the Json[] => {validated: , technologyId: string}
  return (
    <div>
      {isEditable && (
        <AddTechnologies
          technologiesIds={userTechnologiesIds}
          setTechnologiesIds={setUserTechnologiesIds}
        />
      )}
      {/* <DisplayTechnologies  /> */}
    </div>
  );
}
