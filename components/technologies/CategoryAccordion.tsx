"use client";
import { Category, Technology } from "@/app/types/types";
import { useState } from "react";
import DisplayTechnologies from "./DisplayTechnologies";

interface CategoryAccordion {
  category: Category;
  technologies: Technology[];
  onClick: (technologyId: string) => void;
}

export default function CategoryAccordion({
  category,
  technologies,
  onClick,
}: CategoryAccordion) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-auto my-1 cursor-pointer">
      <h4 onClick={() => setIsOpen((current) => !current)}>
        {category.name} &gt;
      </h4>
      <ul
        className={`${
          isOpen ? "" : "hidden collapse"
        } flex flex-col gap-2 transition p-2`}
      >
        <DisplayTechnologies
          typeAction="adding"
          onClick={onClick}
          technologyIds={technologies?.map((technology) => technology.id)}
        />
      </ul>
    </div>
  );
}
