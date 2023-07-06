"use client";

import { useState } from "react";
import CustomButton from "../CustomButton";
import TestModal from "../TestModal";

const filters = [
  { label: "Match" },
  { label: "Technologies", filterComponentModal: <TestModal /> },
  { label: "Villes", modalName: "cities" },
  { label: "Dates", modalName: "dates" },
];

export default function Filters() {
  const [filterComponentModal, setfilterComponentModal] =
    useState<React.ReactNode>(null);
  console.log(filterComponentModal);
  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center justify-around w-8/12 h-20 rounded-3xl bg-slate-400">
        {filters.map((filter) => (
          <CustomButton
            key={filter.label}
            actionLabel={filter.label}
            large
            fullWidth
            additionnalStyle="mx-3"
            onClick={() =>
              setfilterComponentModal(filter?.filterComponentModal)
            }
          />
        ))}
      </div>
      {filterComponentModal}
    </div>
  );
}
