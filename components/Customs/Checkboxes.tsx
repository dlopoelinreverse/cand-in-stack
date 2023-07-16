"use client";

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
      current.includes(event.target.id)
        ? current.filter((type: string) => type !== event.target.id)
        : [...current, event.target.id]
    );
  };
  return (
    <ul className={className}>
      {checkboxesValues.map((checkbox: CheckboxValue) => (
        <li key={checkbox.type} className="flex gap-1">
          <label htmlFor={checkbox.type}>{checkbox.type}</label>
          <input
            type="checkbox"
            id={checkbox.type}
            onChange={handleCheckboxes}
          />
        </li>
      ))}
    </ul>
  );
}
