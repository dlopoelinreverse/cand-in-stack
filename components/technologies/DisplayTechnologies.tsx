"use client";
import { Technology } from "@/app/types/types";
import useTechnology from "@/hooks/useTechnology";
import React from "react";
import TechnologyBadge from "./TechnologyBadge";

interface DisplayTechnologiesProps {
  technologyIds: string[];
  onClick?: (technologyId: string) => void;
  typeAction?: "adding" | "removing";
}

export default function DisplayTechnologies({
  technologyIds,
  onClick,
  typeAction,
}: DisplayTechnologiesProps) {
  const { technologies } = useTechnology();
  const handleClick = (technologyId: string) => {
    if (onClick) onClick(technologyId);
  };
  return (
    <ul className="flex flex-wrap justify-center gap-3 mx-auto max-w-[300px] min-h-12">
      {technologyIds.map((technologyId) => (
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
