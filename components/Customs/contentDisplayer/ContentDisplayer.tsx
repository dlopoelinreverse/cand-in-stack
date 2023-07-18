import { UseMutationResult } from "@tanstack/react-query";
import DisplayContent from "./Displaycontent";

interface ContentDisplayerProps {
  contentElements: ContentElement[];
  isEditable: boolean;
  updateData: (updatedData: {}) => void;
}

export type ContentElement = {
  key: string;
  label: {
    htmlFor: string;
    content?: string;
  };
  elementLength: "long" | "short";
  elementType: "text" | "email" | "phone" | "password" | "number";
  value: string | null;
  editedElement: {
    isEdited: boolean;
    editedValue: string;
  };
  className: string;
};

export default function ContentDisplayer({
  contentElements,
  isEditable,
  updateData,
}: ContentDisplayerProps) {
  return (
    <DisplayContent
      contentElements={contentElements}
      isEditable={isEditable}
      updateData={updateData}
    />
  );
}
