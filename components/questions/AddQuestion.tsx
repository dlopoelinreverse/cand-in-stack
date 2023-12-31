"use client";

import { QuestionType } from "@/app/types/types";
import CustomButton from "../customs/CustomButton";
import { useState } from "react";
import { nanoid } from "nanoid";

interface AddQuestionProps {
  addQuestion: (newQuestion: QuestionType) => void;
}

export default function AddQuestion({ addQuestion }: AddQuestionProps) {
  const [isAdd, setIsAdd] = useState(false);
  const [content, setContent] = useState("");
  const handleAddQuestion = () => {
    const newQuestion = {
      id: nanoid(),
      content,
    };
    addQuestion(newQuestion);
  };
  return (
    <>
      {isAdd ? (
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="newQuestion">Nouvelle question :</label>
          <textarea
            id="newQuestion"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-center gap-2 mb-4">
            <CustomButton label="Ajouter" onClick={handleAddQuestion} />
            <CustomButton
              label="Annuler"
              onClick={() => setIsAdd((current) => !current)}
            />
          </div>
        </div>
      ) : (
        <CustomButton
          label="Ajouter une question"
          onClick={() => setIsAdd((current) => !current)}
          additionalStyle="mx-auto mb-4"
        />
      )}
    </>
  );
}
