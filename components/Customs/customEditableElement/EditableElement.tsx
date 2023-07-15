"use client";

import React, { ElementType, FC, HTMLAttributes, useState } from "react";
import Button from "../Button";

interface EditableElementProps extends HTMLAttributes<HTMLOrSVGElement> {
  as: ElementType;
  children?: React.ReactElement | string;
  content?: string;
  elementFunction?: {
    function: string;
    functionContent: string;
  };
}

const EditableElement: FC<EditableElementProps> = ({
  as: Tag,
  children,
  content,
  elementFunction,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  let EditTag = "div";
  let editType = "";
  if (Tag === "h1" || Tag === "h2" || Tag === "h3") {
    EditTag = "input";
    editType = "text";
  } else if (Tag === "p") {
    EditTag = "textarea";
  }

  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEditing(false);
  };
  return isEditing ? (
    <form onSubmit={handleEdit} className="flex items-center">
      <EditTag />
      <Button label="Editer" type="submit" />
      <Button label="annuler" onClick={() => setIsEditing(false)} />
    </form>
  ) : (
    <div className="flex items-center">
      <Tag>{children}</Tag>
      <Button label="pen" onClick={() => setIsEditing(true)} />
    </div>
  );
};

export default EditableElement;
