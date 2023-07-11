"use client";
import { Category, Technologie } from "@/app/types/types";
import { useState } from "react";
import Technology from "./Technology";
import DisplayTechnologies from "./DisplayTechnologies";

interface CategoryAccordion {
  category: Category;
  technologies: Technologie[];
  onClick: (technologyId: string) => void;
}

export default function CategoryAccordion({
  category,
  technologies,
  onClick,
}: CategoryAccordion) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-1">
      <h4>
        {category.name}{" "}
        <span onClick={() => setIsOpen((current) => !current)}>&gt;</span>
      </h4>
      <ul
        className={`${
          isOpen ? "" : "hidden collapse"
        } flex flex-col gap-2 transition p-2`}
      >
        {/* {technologies?.map((technology) => (
          <Technology
            onClick={onClick}
            technology={technology}
            key={technology.id}
          />
        ))} */}
        <DisplayTechnologies
          typeAction="adding"
          onClick={onClick}
          technologyIds={technologies?.map((technology) => technology.id)}
        />
      </ul>
    </div>
  );
}
