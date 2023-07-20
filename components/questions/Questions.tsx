import { QuestionType } from "@/app/types/types";
import EditableQuestion from "./EditableQuestion";
import Question from "./Question";
import AddQuestion from "./AddQuestion";

interface QuestionProps {
  usage: "display" | "addEdit" | "created";
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
      <ul>
        {questionsOffer.map((question) => {
          if (usage === "addEdit" || usage === "created")
            return (
              <div key={question.id}>
                <EditableQuestion
                  question={question}
                  editQuestion={editQuestion}
                />
              </div>
            );
          return <Question key={question.id} question={question} />;
        })}
      </ul>
      {usage === "addEdit" && addQuestion && (
        <AddQuestion addQuestion={addQuestion} />
      )}
    </>
  );
}
