"use client";

import {
  ChangeEvent,
  Dispatch,
  ElementType,
  FC,
  HTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import { ContentElement } from "./ContentDisplayer";
// @ts-ignore
import CustomButton from "../CustomButton";

export default function EditableContent({
  contentElements,
  updateData,
}: {
  contentElements: ContentElement[];
  updateData: (updatedData: {}) => void;
}) {
  const [updatedData, setUpdatedData] = useState({});

  const elementTypes = {
    long: "textarea" as ElementType,

    short: "input" as ElementType,
  };

  return (
    <form className="flex flex-col">
      {contentElements.map((element) => (
        <Element
          key={element.key}
          as={elementTypes[element.elementLength]}
          type={element.elementType}
          value={element.value ? element.value : ""}
          label={element.label.content}
          htmlFor={element.label.htmlFor}
          setUpdatedData={setUpdatedData}
          className={element.className}
        />
      ))}
      <CustomButton
        label="Éditer le contenu"
        onClick={() => updateData(updatedData)}
        additionalStyle="mx-auto"
      />
    </form>
  );
}

interface ElementProps extends HTMLAttributes<HTMLOrSVGElement> {
  as: ElementType;
  type: string;
  value: string;
  label?: string;
  htmlFor: string;
  setUpdatedData: Dispatch<SetStateAction<{}>>;
  className: string;
}

const Element: FC<ElementProps> = ({
  as: Type,
  type,
  value,
  label,
  htmlFor,
  setUpdatedData,
  className,
}) => {
  const handleUpdateElementValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;

    setUpdatedData((current) => {
      return { ...current, [id]: value };
    });
  };
  return (
    <div className="flex gap-1">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <Type
        type={type}
        defaultValue={value}
        id={htmlFor}
        onChange={handleUpdateElementValue}
        className={className}
      />
    </div>
  );
};
