import useTechnology from "@/hooks/useTechnology";
import React, { useState } from "react";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import { Category, Technologie } from "@/app/types/types";
import CategoryAccordion from "./CategoryAccordion";
import Technology from "./Technology";
import DisplayTechnologies from "./DisplayTechnologies";

interface AddTechnologiesProps {
  technologiesToAdd: (technologiesSelected: string[]) => void;
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
    technologiesToAdd(technologiesSelected);
  };

  const handleClick = (technologyId: string) => {
    setTechnologiesSelected((current) => {
      if (current.includes(technologyId)) return [...current];
      return [...current, technologyId];
    });
  };

  const handleRemoveTechnology = (id: string) => {
    setTechnologiesSelected((current) =>
      current.filter((technologyId) => technologyId !== id)
    );
  };
  return (
    <>
      <DisplayTechnologies
        typeAction="removing"
        onClick={handleRemoveTechnology}
        technologyIds={technologiesSelected}
      />
      <button
        onClick={onOpenModal}
        disabled={isCategoryLoading || isTechnoLoading}
      >
        Ajouter{" "}
        {technologiesSelected.length > 0
          ? "/Modifier les technologies"
          : "des technologies"}
      </button>
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col items-start mb-5 mx-36">
          <DisplayTechnologies
            typeAction="removing"
            onClick={handleRemoveTechnology}
            technologyIds={technologiesSelected}
          />
          {categories?.map((category: Category) => (
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
        </div>
      </MyModal>
    </>
  );
}
