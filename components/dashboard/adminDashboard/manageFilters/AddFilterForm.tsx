"use client";

import useTechnology from "@/hooks/useTechnology";
import { useState } from "react";

interface AddFilterFormProps {
  cancel: () => void;
}

export default function AddFilterForm({ cancel }: AddFilterFormProps) {
  const [newTechnologyData, setNewTechnologyData] = useState({
    technoName: "",
    categoryId: "",
  });
  const { categories, addTechnology } = useTechnology();
  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newTechnologyData);
    addTechnology.mutate(newTechnologyData);
  };
  return (
    <form onSubmit={handleSumbit} className="flex flex-col items-stretch gap-5">
      {addTechnology.isSuccess}
      <select
        defaultValue="default"
        onChange={(event) =>
          setNewTechnologyData({
            ...newTechnologyData,
            categoryId: event.target.value,
          })
        }
      >
        <option value="default" disabled>
          ---sélectionner une catégorie---
        </option>
        {categories?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Saisir une technologie"
        value={newTechnologyData.technoName}
        onChange={(event) =>
          setNewTechnologyData({
            ...newTechnologyData,
            technoName: event.target.value,
          })
        }
      />
      <div className="flex">
        <button type="submit" className="px-3 py-2">
          Ajouter
        </button>
        <button onClick={cancel} className="px-3 py-2">
          Annuler
        </button>
      </div>
    </form>
  );
}
