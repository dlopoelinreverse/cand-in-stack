import { QuestionType } from "@/app/types/types";

interface QuestionProps {
  question: QuestionType;
}

export default function Question({ question }: QuestionProps) {
  return (
    <li>
      <p>{question.content}</p>
    </li>
  );
}
