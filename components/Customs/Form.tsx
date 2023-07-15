import { FromElement } from "@/app/types/customCompoponentTypes";
import React, { Children, FC, HTMLAttributes } from "react";

interface FormProps extends HTMLAttributes<HTMLOrSVGElement> {
  handleSubmit: (event: React.FormEvent<HTMLElement>) => void;
  formContent: FromElement[];
  className: string;
}

const Form: FC<FormProps> = ({ handleSubmit, formContent, className }) => {
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      {formContent.map((element) => {
        return element.label ? (
          <div className={`${element.disposition}`}>
            <label htmlFor={element.labelId}>{element.label}</label>
            <element.as
              key={element.key}
              id={element.labelId}
              type={element.type}
              placeholder={element.placeholder}
            />
          </div>
        ) : (
          <element.as
            key={element.key}
            type={element.type}
            placeholder={element.placeholder}
          />
        );
      })}
    </form>
  );
};

export default Form;
