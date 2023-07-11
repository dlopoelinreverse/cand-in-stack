import { Technologie } from "@/app/types/types";
import React, { useState } from "react";

interface TechnologyProps {
  technology: Technologie;
  onClick: (technologyId: string) => void;
  typeAction: "adding" | "removing";
}

export default function Technology({
  technology,
  onClick,
  typeAction,
}: TechnologyProps) {
  return (
    <div
      onClick={() => onClick(technology.id)}
      className={`${typeAction === "adding" && "hover:bg-green-200"} ${
        typeAction === "removing" && " hover:bg-red-200"
      } transition cursor-pointer`}
    >
      {typeAction === "adding" && <span>+</span>}
      {typeAction === "removing" && <span>x</span>}
      <p>{technology.name}</p>
    </div>
  );
}
