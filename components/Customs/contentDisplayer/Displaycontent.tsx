"use client";
import {
  ElementType,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "../Button";
import { ContentElement } from "./ContentDisplayer";
import EditableContent from "./EditableContent";

interface DisplayContentProps {
  contentElements: ContentElement[];
  isEditable: boolean;
  updateData: (updatedData: {}) => void;
  onSuccessUpdate: boolean;
}

export default function DisplayContent({
  contentElements,
  isEditable,
  updateData,
  onSuccessUpdate,
}: DisplayContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const elementTypes = {
    long: "p" as ElementType,
    short: "h3" as ElementType,
  };
  useEffect(() => {
    if (onSuccessUpdate) setIsEditing(!onSuccessUpdate);
  }, [onSuccessUpdate]);
  return (
    <div>
      {isEditable && (
        <Button
          label={isEditing ? "Annuler" : "Editer"}
          onClick={() => setIsEditing((current) => !current)}
        />
      )}
      {isEditable && isEditing ? (
        <EditableContent
          contentElements={contentElements}
          updateData={updateData}
        />
      ) : (
        <ul>
          {contentElements.map((element) => (
            <Element
              key={element.key}
              as={elementTypes[element.elementLength]}
              className={element.className}
            >
              <>
                {element.label.content}
                {element.value}
              </>
            </Element>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ElementProps extends HTMLAttributes<HTMLOrSVGElement> {
  as: ElementType;
  children: React.ReactElement | string;
  className: string;
}

const Element: FC<ElementProps> = ({ as: Type, children, className }) => {
  return <Type className={className}>{children}</Type>;
};
