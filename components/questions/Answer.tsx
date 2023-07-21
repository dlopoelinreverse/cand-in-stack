import { AnswerType, QuestionType } from "@/app/types/types";
import { nanoid } from "nanoid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface AnswerProps {
  question: QuestionType;
  setAnswers: Dispatch<SetStateAction<AnswerType[]>>;
}

export default function Answer({ question, setAnswers }: AnswerProps) {
  const handleAnswer = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswer: AnswerType = {
      id: nanoid(),
      questionId: question.id,
      questionContent: question.content,
      answer: event.target.value,
    };
    setAnswers((current) =>
      current.find((answer) => answer.questionId === question.id)
        ? current.map((answer) => {
            if (answer.questionId === question.id)
              return { ...answer, answer: event.target.value };
            return answer;
          })
        : [...current, newAnswer]
    );
  };
  return (
    <li className="flex flex-col ">
      <label htmlFor="answer">
        {question.content}
        {question.content.includes("?") ? "" : " ?"}
      </label>
      <textarea
        id="answer"
        placeholder="Votre reponse"
        onChange={handleAnswer}
      />
    </li>
  );
}
