import { getUserId } from "@/app/utils/getUserId";
import Link from "next/link";

export default async function UserProfileIcon() {
  const userId = await getUserId();
  if (!userId) return null;
  return <Link href={`/profile/${userId}`}>Profil</Link>;
}
