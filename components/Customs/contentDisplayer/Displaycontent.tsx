"use client";
import { ElementType, FC, HTMLAttributes, useState } from "react";
import Button from "../Button";
import { ContentElement } from "./ContentDisplayer";
import EditableContent from "./EditableContent";

interface DisplayContentProps {
  contentElements: ContentElement[];
  isEditable: boolean;
}

export default function DisplayContent({
  contentElements,
  isEditable,
}: DisplayContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const elementTypes = {
    long: "p" as ElementType,
    short: "h3" as ElementType,
  };
  return (
    <div>
      {isEditable && (
        <Button
          label={isEditing ? "Annuler" : "Editer"}
          onClick={() => setIsEditing((current) => !current)}
        />
      )}
      {isEditing ? (
        <EditableContent contentElements={contentElements} />
      ) : (
        <ul>
          {contentElements.map((element) => (
            <Element key={element.key} as={elementTypes[element.elementLength]}>
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
}

const Element: FC<ElementProps> = ({ as: Type, children }) => {
  return <Type>{children}</Type>;
};
