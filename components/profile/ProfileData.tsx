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
  const { userData, userDataLoading, userDataError, updateProfileData } =
    useUser(user);
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

  const handleUpdateProfileData = (updatedData: {}) => {
    if (Object.keys(updatedData).length) {
      updateProfileData.mutate(updatedData);
    }
  };

  console.log("render");

  return (
    <ContentDisplayer
      contentElements={profileContentElements}
      isEditable={isEditable}
      updateData={handleUpdateProfileData}
      onSuccessUpdate={updateProfileData.isSuccess}
    />
  );
}
