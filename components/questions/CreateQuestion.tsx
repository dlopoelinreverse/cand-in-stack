import { QuestionType } from "@/app/types/types";
import Questions from "./Questions";
import { useState } from "react";
import Button from "../customs/Button";
import { nanoid } from "nanoid";

interface CreateQuestionProps {
  createdQuestion: QuestionType[];
  setCreatedQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
}

export default function CreateQuestion({
  createdQuestion,
  setCreatedQuestions,
}: CreateQuestionProps) {
  const [content, setContent] = useState("");

  const handleCreateQuestion = () => {
    const newQuestion = {
      id: nanoid(),
      content,
    };
    setCreatedQuestions((current) => [...current, newQuestion]);
    setContent("");
  };

  const handleQuestionEdtit = (editedQuestion: QuestionType) => {
    setCreatedQuestions((current) =>
      current.map((question) => {
        if (question.id === editedQuestion.id) return editedQuestion;
        return question;
      })
    );
  };
  return (
    <div>
      <Questions
        usage="creating"
        questionsOffer={createdQuestion}
        editQuestion={handleQuestionEdtit}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="questionContent">
          Question {createdQuestion.length + 1} :
        </label>
        <textarea
          id="questionContent"
          placeholder="contenu de la question"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button label="Ajouter la question" onClick={handleCreateQuestion} />
      </div>
    </div>
  );
}
