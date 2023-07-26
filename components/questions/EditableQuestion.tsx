"use client";

import { useState } from "react";
import Question from "./Question";
import { QuestionType } from "@/app/types/types";
import Button from "../customs/Button";

interface EditableQuestionProps {
  question: QuestionType;
  editQuestion?: (editedQuestion: QuestionType) => void;
}

export default function EditableQuestion({
  question,
  editQuestion,
}: EditableQuestionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const handleEdit = () => {
    if (editedContent !== question.content && editQuestion) {
      const editedQuestion = { ...question, content: editedContent };
      editQuestion(editedQuestion);
      setIsEditing(false);
    }
  };
  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            defaultValue={question.content}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <Button
            label="Editer"
            disabled={editedContent.length <= 0}
            onClick={handleEdit}
          />
          <Button
            label="Annuler"
            onClick={() => setIsEditing((current) => !current)}
          />
        </>
      ) : (
        <div className="flex justify-between w-full gap-2">
          <Question question={question} />
          <Button
            label="Edit"
            onClick={() => setIsEditing((current) => !current)}
          />
        </div>
      )}
    </>
  );
}
