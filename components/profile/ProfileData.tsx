"use client";
import { User } from "@prisma/client";
import ContentDisplayer, {
  ContentElement,
} from "../customs/contentDisplayer/ContentDisplayer";
import { nanoid } from "nanoid";
import useUser from "@/hooks/useUser";

interface ProfileDataProps {
  user: User;
  isEditable: boolean;
}

export default function ProfileData({ user, isEditable }: ProfileDataProps) {
  // useUser => getUserDatawith initial data = user(from server)
  const { userData, userDataLoading, userDataError } = useUser(user);
  if (userDataLoading) return <p>Loading</p>;
  if (userDataError) return <p>Error</p>;
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
    },
  ];
  return (
    <ContentDisplayer
      contentElements={profileContentElements}
      isEditable={isEditable}
    />
  );
}
