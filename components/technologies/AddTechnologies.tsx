import useTechnology from "@/hooks/useTechnology";
import React, { SetStateAction } from "react";
import MyModal from "../Modals/MyModal";
import { useModal } from "@/hooks/useModal";
import { Category, Technology } from "@/app/types/types";
import CategoryAccordion from "./CategoryAccordion";
import DisplayTechnologies from "./DisplayTechnologies";
import Button from "../customs/Button";

interface AddTechnologiesProps {
  technologiesIds: string[];
  setTechnologiesIds: React.Dispatch<SetStateAction<string[]>>;
}

export default function AddTechnologies({
  technologiesIds,
  setTechnologiesIds,
}: AddTechnologiesProps) {
  const { modalOpen, onOpenModal, onCloseModal } = useModal();
  const { technologies, categories, isCategoryLoading, isTechnoLoading } =
    useTechnology();

  const handleValidation = () => {
    onCloseModal();
  };
  const handleCancel = () => {
    onCloseModal();
  };

  const handleAddTechnology = (technologyId: string) => {
    setTechnologiesIds((current) =>
      current.includes(technologyId) ? [...current] : [...current, technologyId]
    );
  };

  const handleRemoveTechnology = (technologyId: string) => {
    setTechnologiesIds((current) =>
      current.filter((id) => id !== technologyId)
    );
  };
  return (
    <div className="mx-auto mt-3">
      <DisplayTechnologies
        typeAction="removing"
        onClick={handleRemoveTechnology}
        technologyIds={technologiesIds}
      />
      <Button
        label={` Ajouter 
        ${
          technologiesIds.length > 0
            ? "/Modifier les technologies"
            : "des technologies"
        }`}
        onClick={onOpenModal}
        disabled={isCategoryLoading || isTechnoLoading}
        additionalStyle="my-3"
      />
      <MyModal isOpen={modalOpen} onClose={onCloseModal}>
        <div className="flex flex-col items-start mx-auto mb-5">
          <DisplayTechnologies
            typeAction="removing"
            onClick={handleRemoveTechnology}
            technologyIds={technologiesIds}
          />
          {categories?.map((category: Category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              technologies={technologies?.filter(
                (technology: Technology) =>
                  technology.categoryId === category.id
              )}
              onClick={handleAddTechnology}
            />
          ))}
          <div className="flex justify-center gap-5 mx-auto ">
            <Button label="Valider" onClick={handleValidation} />
            <Button label="Annuler" onClick={handleCancel} />
          </div>
        </div>
      </MyModal>
    </div>
  );
}
