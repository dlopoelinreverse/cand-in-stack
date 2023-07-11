"use client";
import { Technologie } from "@/app/types/types";
import useTechnology from "@/hooks/useTechnology";
import React from "react";
import Technology from "./Technology";

interface DisplayTechnologiesProps {
  technologyIds: string[];
  onClick: (technologyId: string) => void;
  typeAction: "adding" | "removing";
}

export default function DisplayTechnologies({
  technologyIds,
  onClick,
  typeAction,
}: DisplayTechnologiesProps) {
  const { technologies } = useTechnology();
  return (
    <div className="flex flex-wrap gap-3">
      {technologyIds.map((technologyId) => (
        <Technology
          onClick={() => onClick(technologyId)}
          technology={
            technologies.filter(
              (technology: Technologie) => technology.id === technologyId
            )[0]
          }
          typeAction={typeAction}
          key={technologyId}
        />
      ))}
    </div>
  );
}
