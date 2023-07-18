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
import Button from "../Button";

export default function EditableContent({
  contentElements,
  updateData,
}: {
  contentElements: ContentElement[];
  updateData: (updatedData: {}) => void;
}) {
  // logic update data
  // const { userData, updateProfileData } = useUser();

  const [updatedData, setUpdatedData] = useState({});

  const elementTypes = {
    long: "textarea" as ElementType,

    short: "input" as ElementType,
  };

  const testUpdating = () => {
    // if (Object.keys(updatedData).length) {
    //   let dataToUpdate = userData;
    //   Object.entries(updatedData).map(
    //     (entrie) => (dataToUpdate[entrie[0]] = entrie[1])
    //   );
    //   console.log(dataToUpdate);
    //   updateProfileData.mutate(dataToUpdate);
    // }
    // updateData(updatedData);
  };

  return (
    <form className="flex flex-col">
      <pre>{JSON.stringify(updatedData)}</pre>
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
      <Button
        label="test"
        // disabled={updateProfileData.isLoading}
        onClick={() => updateData(updatedData)}
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
