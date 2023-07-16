"use client";
import { nanoid } from "nanoid";
import Button from "../../customs/Button";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface QuizProps {
  questionElements: QuestionElement[];
  setQuestionElements: React.Dispatch<React.SetStateAction<QuestionElement[]>>;
}

export type QuestionElement = {
  key: string;
  value: string;
};

export default function Quiz({
  questionElements,
  setQuestionElements,
}: QuizProps) {
  const addNewQuestion = () => {
    setQuestionElements((current) => [
      ...current,
      { key: nanoid(), value: "" },
    ]);
  };

  return (
    <div className="flex flex-col w-full mx-auto mt-5">
      <ul className="flex flex-col w-full px-3">
        {questionElements.map((element, index) => (
          <QuestionElement
            key={element.key}
            element={element}
            questionNum={index + 1}
            setQuestionElements={setQuestionElements}
          />
        ))}
      </ul>
      <Button
        label="Ajouter des questions"
        onClick={addNewQuestion}
        additionalStyle="mx-auto mt-5"
      />
    </div>
  );
}

function QuestionElement({
  element,
  questionNum,
  setQuestionElements,
}: {
  element: QuestionElement;
  questionNum: number;
  setQuestionElements: Dispatch<SetStateAction<QuestionElement[]>>;
}) {
  const handleUpdateValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionElements((current) =>
      current.map((element) => {
        if (element.key === event.target.id) {
          return {
            ...element,
            value: event.target.value,
          };
        } else {
          return element;
        }
      })
    );
  };
  const removeQuestion = (id: string) => {
    setQuestionElements((current) =>
      current.filter((element) => element.key !== id)
    );
  };
  return (
    <li>
      <p>Question n°{questionNum}</p>
      <div className="flex items-center gap-3">
        <textarea
          key={element.key}
          id={element.key}
          value={element.value}
          onChange={handleUpdateValue}
          className="w-full h-24 p-2 resize-none"
        />
        <Button label="X" onClick={() => removeQuestion(element.key)} />
      </div>
    </li>
  );
}
