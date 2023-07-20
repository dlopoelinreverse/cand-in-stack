"use client";
import { MultipleChoiceElement } from "@/app/contentDisplayerV2/page";
import Button from "../Button";
import { useState } from "react";

interface ContentDisplayerV2Props {
  content: ContentElementV2[];
}

export type ContentElementV2 = {
  key: string;
  label: {
    htmlFor: string;
    content?: string;
  };
  elementNature: "textLine" | "paragraph" | "questions" | "multipleChoices";
  value: MultipleChoiceElement[] | [];
  isEditable: boolean;
};

export default function ContentDisplayerV2({
  content,
}: ContentDisplayerV2Props) {
  const handleClick = (el: string) => {
    console.log(el);
  };
  return (
    <ul>
      {content.map((element) => {
        switch (element.elementNature) {
          case "textLine":
            return <h3>{String(element.value)}</h3>;
          case "multipleChoices":
            return (
              <MultipleChoicesDisplay
                multiChoicesElement={element}
                key={element.key}
              />
            );
        }
      })}
    </ul>
  );
}

interface MultipleChoicesDisplayProps {
  multiChoicesElement: ContentElementV2;
}

const MultipleChoicesDisplay = ({
  multiChoicesElement: element,
}: MultipleChoicesDisplayProps) => {
  const [multichoicesStatus, setMultichoicesStatus] = useState<string[]>([]);
  const handleCheck = (checkboxId: string) => {
    setMultichoicesStatus((current) =>
      current.includes(checkboxId)
        ? current.filter((checkedId) => checkboxId !== checkboxId)
        : [...current, checkboxId]
    );
    // if(current.includes(checkboxId)) {
    //   return current.filter(checkedId => checkboxId !== checkboxId)
    // } else {

    // }
  };
  return (
    <ul>
      {element.value.map((choice) => (
        <label htmlFor={choice.id} key={choice.key}>
          {choice.choiceLabel}
          <input
            type="checkbox"
            id={choice.id}
            onInput={() => handleCheck(choice.id)}
          />
        </label>
      ))}
    </ul>
  );
};
