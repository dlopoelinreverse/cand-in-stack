import { LiteUserData } from "@/app/types/types";
import Link from "next/link";

interface ProfileBoxProps {
  userData: LiteUserData;
}

export default function ProfileBox({ userData }: ProfileBoxProps) {
  return (
    <div>
      <h1>{userData.email}</h1>
      <Link href={`/profile/${userData.id}`}>Profil</Link>
    </div>
  );
}
