import DisplayTechnologies from "../DisplayTechnologies";
import { User } from "@prisma/client";
import CurrentUserTechnologies from "./CurrentUserTechnologies";

interface UserTechnologiesProps {
  userServerData: User;
  isCurrentUser: boolean;
}

export default function UserTechnologies({
  userServerData,
  isCurrentUser,
}: UserTechnologiesProps) {
  if (isCurrentUser)
    return <CurrentUserTechnologies userServerData={userServerData} />;

  return (
    <DisplayTechnologies technologiesIds={userServerData.userTechnologies} />
  );
}
