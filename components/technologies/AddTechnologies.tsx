"use client";
import useTechnology from "@/hooks/useTechnology";
import React, { useState } from "react";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import { Category, Technologie } from "@/app/types/types";
import CategoryAccordion from "./CategoryAccordion";
import Technology from "./Technology";

interface AddTechnologiesProps {
  technologiesToAdd: (technologiesSelected: Technologie[]) => void;
}

export default function AddTechnologies({
  technologiesToAdd,
}: AddTechnologiesProps) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { technologies, categories, isCategoryLoading, isTechnoLoading } =
    useTechnology();
  const [technologiesSelected, setTechnologiesSelected] = useState<string[]>(
    []
  );

  const handleValidation = () => {
    // technologiesToAdd(technologiesSelected);
  };

  const handleClick = (technologyId: string) => {
    setTechnologiesSelected((current) => {
      return [...current, technologyId];
    });
  };

  if (isCategoryLoading || isTechnoLoading) return <p>Loading...</p>;
  return (
    <>
      {technologiesSelected.length > 0 &&
        technologiesSelected.map((technologyId) => (
          <Technology technologyId={technologyId} key={technologyId} />
        ))}
      <button onClick={onOpenModal}>
        Ajouter{" "}
        {technologiesSelected.length > 0
          ? "/Modifier les technologies"
          : "des technologies"}
      </button>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <>
          {categories.map((category: Category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              technologies={technologies.filter(
                (technology: Technologie) =>
                  technology.categoryId === category.id
              )}
              onClick={handleClick}
            />
          ))}
          <button onClick={handleValidation}>Valider</button>
          <button onClick={onCloseModal}>Anuler</button>
        </>
      </MyModal>
    </>
  );
}
