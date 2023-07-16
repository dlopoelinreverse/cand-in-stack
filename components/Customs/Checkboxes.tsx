"use client";

import { nanoid } from "nanoid";

interface CheckboxesProps {
  checkboxesValues: CheckboxValue[];
  setCheckedBoxes: React.Dispatch<React.SetStateAction<string[]>>;
  className: string;
}

type CheckboxValue = {
  type: string;
};

export default function Checkboxes({
  checkboxesValues,
  setCheckedBoxes,
  className,
}: CheckboxesProps) {
  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedBoxes((current: string[]) =>
      current.includes(event.target.value)
        ? current.filter((type: string) => type !== event.target.value)
        : [...current, event.target.value]
    );
  };
  return (
    <ul className={className}>
      {checkboxesValues.map((checkbox: CheckboxValue) => (
        <li key={nanoid()} className="flex gap-1">
          <label htmlFor={checkbox.type}>{checkbox.type}</label>
          <input
            type="checkbox"
            id={checkbox.type}
            value={checkbox.type}
            onChange={handleCheckboxes}
          />
        </li>
      ))}
    </ul>
  );
}
