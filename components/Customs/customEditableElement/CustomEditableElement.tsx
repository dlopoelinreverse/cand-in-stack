import { ElementType, FC, HTMLAttributes } from "react";
import EditableElement from "./EditableElement";

interface CustomEditableElement extends HTMLAttributes<HTMLOrSVGElement> {
  isEditable: boolean;
  as: ElementType;
  children?: React.ReactElement | string;
  elementContent?: string;
  elementFunction?: {
    function: string;
    functionContent: string;
  };
}

const CustomEditableElement: FC<CustomEditableElement> = ({
  isEditable,
  as: Tag,
  children,
  elementContent,
  elementFunction,
}) => {
  if (isEditable)
    return (
      <EditableElement as={Tag} elementFunction={elementFunction}>
        {children}
      </EditableElement>
    );
  return <Tag>{children}</Tag>;
};

export default CustomEditableElement;
