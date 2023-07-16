"use client";
import useEditableElement from "@/hooks/useEditableElement";

interface H3EditableElementProps {
  content: string;
  onEdtit: (editedContent: string) => void;
}

export default function H3EditableElement({
  content,
  onEdtit,
}: H3EditableElementProps) {
  const { isEditing, editingToggle } = useEditableElement();
  return isEditing ? (
    <>
      <input type="text" value={content} />
    </>
  ) : (
    <>
      <h3>{content}</h3>
    </>
  );
}
