import DisplayContent from "./Displaycontent";

interface ContentDisplayerProps {
  contentElements: ContentElement[];
  isEditable: boolean;
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
};

export default function ContentDisplayer({
  contentElements,
  isEditable,
}: ContentDisplayerProps) {
  return (
    <DisplayContent contentElements={contentElements} isEditable={isEditable} />
  );
}
