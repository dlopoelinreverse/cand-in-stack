// @ts-ignore
import DisplayContent from "./DisplayContent";

interface ContentDisplayerProps {
  contentElements: ContentElement[];
  isEditable: boolean;
  updateData: (updatedData: {}) => void;
  onSuccessUpdate: boolean;
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
  onSuccessUpdate,
}: ContentDisplayerProps) {
  return (
    <DisplayContent
      contentElements={contentElements}
      isEditable={isEditable}
      updateData={updateData}
      onSuccessUpdate={onSuccessUpdate}
    />
  );
}
