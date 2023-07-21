import { QuestionType } from "@/app/types/types";
import EditableQuestion from "./EditableQuestion";
import Question from "./Question";
import AddQuestion from "./AddQuestion";
import Answer from "./Answer";

interface QuestionProps {
  usage: "displaying" | "addEdit" | "creating" | "answering";
  questionsOffer: QuestionType[];
  editQuestion?: (editedQuestion: QuestionType) => void;
  addQuestion?: (newQuestion: QuestionType) => void;
}

export default function Questions({
  usage,
  questionsOffer,
  editQuestion,
  addQuestion,
}: QuestionProps) {
  return (
    <>
      <ul className="w-full">
        {questionsOffer.map((question) => {
          switch (usage) {
            case "displaying":
              return <Question key={question.id} question={question} />;
            case "addEdit" || "creating":
              return (
                <div key={question.id}>
                  <EditableQuestion
                    question={question}
                    editQuestion={editQuestion}
                  />
                </div>
              );
            case "answering":
              return <Answer key={question.id} question={question} />;
          }
        })}
      </ul>
      {usage === "addEdit" && addQuestion && (
        <AddQuestion addQuestion={addQuestion} />
      )}
    </>
  );
}
