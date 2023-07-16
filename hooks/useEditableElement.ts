import { useState } from "react";

export default function useEditableElement() {
  const [isEditing, setIsEditing] = useState(false);
  const editingToggle = () => {
    setIsEditing((current) => !current);
  };
  return { isEditing, editingToggle };
}
