import { Technology } from "@/app/types/types";
import React from "react";

interface TechnologyProps {
  technology: Technology;
  onClick: (technologyId: string) => void;
  typeAction?: "adding" | "removing";
}

export default function TechnologyBadge({
  technology,
  onClick,
  typeAction,
}: TechnologyProps) {
  return (
    <li
      onClick={() => onClick(technology.id)}
      className={`${typeAction === "adding" && "hover:bg-green-200"} ${
        typeAction === "removing" && " hover:bg-red-200"
      } transition cursor-pointer flex items-center gap-2 p-3 rounded-lg bg-slate-200`}
    >
      {typeAction === "adding" && <span>+</span>}
      {typeAction === "removing" && <span>x</span>}
      <p>{technology?.name}</p>
    </li>
  );
}
