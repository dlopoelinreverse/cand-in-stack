import { AnswerType, QuestionType } from "@/app/types/types";
import EditableQuestion from "./EditableQuestion";
import Question from "./Question";
import AddQuestion from "./AddQuestion";
import Answer from "./Answer";
import { Dispatch, SetStateAction } from "react";

interface QuestionProps {
  usage: "displaying" | "addEdit" | "creating" | "answering";
  questionsOffer: QuestionType[];
  editQuestion?: (editedQuestion: QuestionType) => void;
  addQuestion?: (newQuestion: QuestionType) => void;
  setAnswers?: Dispatch<SetStateAction<AnswerType[]>>;
}

export default function Questions({
  usage,
  questionsOffer,
  editQuestion,
  addQuestion,
  setAnswers,
}: QuestionProps) {
  return (
    <>
      <ul className="w-full">
        {questionsOffer.map((question) => {
          switch (usage) {
            case "displaying":
              return <Question key={question.id} question={question} />;
            case "addEdit":
              return (
                <div key={question.id}>
                  <EditableQuestion
                    question={question}
                    editQuestion={editQuestion}
                  />
                </div>
              );
            case "creating":
              return (
                <div key={question.id}>
                  <EditableQuestion
                    question={question}
                    editQuestion={editQuestion}
                  />
                </div>
              );
            case "answering":
              if (!setAnswers) return;
              return (
                <Answer
                  key={question.id}
                  question={question}
                  setAnswers={setAnswers}
                />
              );
          }
        })}
      </ul>
      {usage === "addEdit" && addQuestion && (
        <AddQuestion addQuestion={addQuestion} />
      )}
    </>
  );
}
