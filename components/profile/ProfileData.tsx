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
        htmlFor: "phone",
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
      let dataToUpdate = userData;
      Object.entries(updatedData).map(
        (entrie) => (dataToUpdate[entrie[0]] = entrie[1])
      );
      console.log(dataToUpdate);
      updateProfileData.mutate(dataToUpdate);

      console.log(Object.entries(updatedData));

      // better optimisation, get updatedData {key: originalKeyName : "updatedValue"}, send updatedData
      // modifier updatedData en array ?
    }
  };
  return (
    <ContentDisplayer
      contentElements={profileContentElements}
      isEditable={isEditable}
      updateData={handleUpdateProfileData}
    />
  );
}
