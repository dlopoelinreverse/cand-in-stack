import ContentDisplayerV2, {
  ContentElementV2,
} from "@/components/customs/contentDisplayerV2/ContentDisplayerV2";
import { nanoid } from "nanoid";
import React from "react";

const multipleChoices: MultipleChoiceElement[] = [
  {
    key: nanoid(),
    choiceLabel: "choix 1",
    id: "choice1",
  },
  {
    key: nanoid(),
    choiceLabel: "choix 2",
    id: "choice2",
  },
  {
    key: nanoid(),
    choiceLabel: "choix 3",
    id: "choice3",
  },
  {
    key: nanoid(),
    choiceLabel: "choix 4",
    id: "choice4",
  },
];

export type MultipleChoiceElement = {
  key: string;
  choiceLabel: string;
  id: string;
};

export default function page() {
  const content: ContentElementV2[] = [
    {
      key: nanoid(),
      label: { htmlFor: "multipleChoices" },
      elementNature: "multipleChoices",
      value: multipleChoices,
      isEditable: true,
    },
  ];
  return <ContentDisplayerV2 content={content} />;
}
