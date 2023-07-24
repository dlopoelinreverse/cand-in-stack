"use client";
import { Technology } from "@/app/types/types";
import useTechnology from "@/hooks/useTechnology";
import React from "react";
import TechnologyBadge from "./TechnologyBadge";

interface DisplayTechnologiesProps {
  technologiesIds: string[];
  onClick?: (technologyId: string) => void;
  typeAction?: "adding" | "removing" | "displaying";
}

export default function DisplayTechnologies({
  technologiesIds,
  onClick,
  typeAction,
}: DisplayTechnologiesProps) {
  const { technologies, isTechnoLoading } = useTechnology();
  const handleClick = (technologyId: string) => {
    // for removing technologyId
    if (onClick) onClick(technologyId);
  };
  if (isTechnoLoading) return <p>Technologies Loading...</p>;
  return (
    <ul className="flex flex-wrap justify-center gap-3 mx-auto max-w-[300px] min-h-12">
      {technologiesIds.map((technologyId) => (
        <TechnologyBadge
          onClick={() => handleClick(technologyId)}
          technology={
            technologies?.filter(
              (technology: Technology) => technology.id === technologyId
            )[0]
          }
          typeAction={typeAction}
          key={technologyId}
        />
      ))}
    </ul>
  );
}
