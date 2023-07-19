"use client";

import useUser from "@/hooks/useUser";
import ContentDisplayer, {
  ContentElement,
} from "../customs/contentDisplayer/ContentDisplayer";
import { User } from "@prisma/client";
import { nanoid } from "nanoid";

export default function CurrentProfileData({
  userData: userServerData,
}: {
  userData: User;
}) {
  const { userData, userDataLoading, userDataError, updateProfileData } =
    useUser(userServerData);
  if (userDataLoading) return <p>Loading</p>;
  if (userDataError) return <p>Error</p>;
  const handleUpdateProfileData = (updatedData: {}) => {
    if (Object.keys(updatedData).length) {
      updateProfileData.mutate(updatedData);
    }
  };
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
  return (
    <ContentDisplayer
      contentElements={profileContentElements}
      isEditable={true}
      updateData={handleUpdateProfileData}
      onSuccessUpdate={updateProfileData.isSuccess}
    />
  );
}
