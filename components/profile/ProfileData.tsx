"use client";
import { User } from "@prisma/client";
import ContentDisplayer, {
  ContentElement,
} from "../customs/contentDisplayer/ContentDisplayer";
import { nanoid } from "nanoid";
import CurrentProfileData from "./CurrentProfileData";

interface ProfileDataProps {
  userServerData: User;
  isCurrentUser: boolean;
}

export default function ProfileData({
  userServerData: userData,
  isCurrentUser,
}: ProfileDataProps) {
  const profileContentElements: ContentElement[] = [
    {
      key: nanoid(),
      label: {
        htmlFor: "name",
        content: "Nom : ",
      },
      elementLength: "short",
      elementType: "text",
      value: userData.name,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
    {
      key: nanoid(),
      label: {
        htmlFor: "email",
        content: "Email : ",
      },
      elementLength: "short",
      elementType: "email",
      value: userData.email,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
    {
      key: nanoid(),
      label: {
        htmlFor: "phoneNumber",
        content: "Téléphonne : ",
      },
      elementLength: "short",
      elementType: "phone",
      value: userData.phoneNumber,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
    {
      key: nanoid(),
      label: {
        htmlFor: "city",
        content: "Ville : ",
      },
      elementLength: "short",
      elementType: "text",
      value: userData.city,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
    {
      key: nanoid(),
      label: {
        htmlFor: "description",
        content: "Description : ",
      },
      elementLength: "long",
      elementType: "text",
      value: userData.description,
      editedElement: {
        isEdited: false,
        editedValue: "",
      },
      className: "",
    },
  ];

  if (isCurrentUser) return <CurrentProfileData userData={userData} />;

  return (
    <ContentDisplayer
      contentElements={profileContentElements}
      isEditable={isCurrentUser}
      updateData={() => {}}
      onSuccessUpdate={false}
    />
  );
}
