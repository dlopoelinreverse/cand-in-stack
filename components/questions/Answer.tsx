import { QuestionType } from "@/app/types/types";

interface AnswerProps {
  question: QuestionType;
}

export default function Answer({ question }: AnswerProps) {
  return (
    <li className="flex flex-col ">
      <label htmlFor="answer">
        {question.content}
        {question.content.includes("?") ? "" : " ?"}
      </label>
      <textarea id="answer" placeholder="Votre reponse" />
    </li>
  );
}
