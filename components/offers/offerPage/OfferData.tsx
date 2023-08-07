"use client";
import { Offer, QuestionType } from "@/app/types/types";
import ApplyOnOffer from "@/components/applies/ApplyOnOffer";
import ContentDisplayer, {
  ContentElement,
} from "@/components/customs/contentDisplayer/ContentDisplayer";
import DisplayTechnologies from "@/components/technologies/DisplayTechnologies";
import useOffer from "@/hooks/useOffer";
import { User } from "@prisma/client";
import { nanoid } from "nanoid";
import EditOfferTechnologies from "./EditOfferTechnologies";
import AddQuestion from "@/components/questions/AddQuestion";
import Questions from "@/components/questions/Questions";

interface OfferDataProps {
  offerServerData: Offer;
  enterpriseData: User;
  isCurrentEnterpriseOffer: boolean;
  isAuthenticatedUser: boolean;
  userRole: string | undefined;
}

export default function OfferData({
  offerServerData: offer,
  enterpriseData,
  isCurrentEnterpriseOffer,
  isAuthenticatedUser,
  userRole,
}: OfferDataProps) {
  const { offerData, isLoading, isError, updateOffer } = useOffer(
    offer.id,
    offer
  );

  if (isLoading || !offerData) return <p>OfferData Loading</p>;
  if (isError) return <p>OfferData Error</p>;
  const contentOffer: ContentElement[] = [
    {
      key: nanoid(),
      label: {
        htmlFor: "title",
        content: "Titre de l'offre : ",
      },
      elementLength: "short",
      elementType: "text",
      value: offerData.title,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "my-2",
    },
    {
      key: nanoid(),
      label: {
        htmlFor: "description",
        content: "Description : ",
      },
      elementLength: "long",
      elementType: "text",
      value: offerData.title,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "my-2",
    },
  ];

  const handleUpdateOfferData = (updatedData: {}) => {
    updateOffer.mutate(updatedData);
  };

  const handleEditQuestions = (editedQuestion: QuestionType) => {
    const questions = offerData.questions;
    const editedQuestions = questions.map((question) => {
      if (question.id === editedQuestion.id) return editedQuestion;
      return question;
    });
    updateOffer.mutate({ questions: editedQuestions });
  };

  const handleAddQuestion = (newQuestion: QuestionType) => {
    let offerQuestions = { questions: [...offerData.questions] };
    offerQuestions.questions.push(newQuestion);
    updateOffer.mutate(offerQuestions);
  };

  return (
    <div>
      <ContentDisplayer
        contentElements={contentOffer}
        isEditable={isCurrentEnterpriseOffer}
        updateData={handleUpdateOfferData}
        onSuccessUpdate={updateOffer.isSuccess}
      />
      {isCurrentEnterpriseOffer ? (
        <div className="flex flex-col items-center gap-2 mb-2">
          <Questions
            usage="addEdit"
            questionsOffer={offerData.questions}
            editQuestion={handleEditQuestions}
            addQuestion={handleAddQuestion}
          />
          <EditOfferTechnologies offerData={offerData} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 mb-2">
          <Questions usage="displaying" questionsOffer={offerData.questions} />
          <DisplayTechnologies technologiesIds={offer.technologiesIds} />
        </div>
      )}
      {userRole === "USER" && isAuthenticatedUser && (
        <ApplyOnOffer offer={offer} />
      )}
      {!isAuthenticatedUser && (
        <p>
          Affin de candidater à cette offre, merci de vous connecter ou de vous
          créer un compte utilisateur.
        </p>
      )}
    </div>
  );
}
