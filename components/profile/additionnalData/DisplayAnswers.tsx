import { AnswerType } from "@/app/types/types";
import React from "react";

export default function DisplayAnswers({ answers }: { answers: AnswerType[] }) {
  if (!answers.length) return null;
  return (
    <ul>
      {answers.map((answer) => (
        <li key={answer.id}>
          {answer.questionContent}
          {answer.answer}
        </li>
      ))}
    </ul>
  );
}
