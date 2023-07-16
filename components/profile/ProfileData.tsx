import { User } from "@prisma/client";

interface ProfileDataProps {
  user: User;
  isEditable: boolean;
}

export default function ProfileData({ user, isEditable }: ProfileDataProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1>{user.name}</h1>
      <p>Email : {user.email}</p>
      <p>Téléphonne : {user.phone}</p>
      <p>Ville : {user.city}</p>
    </div>
  );
}
