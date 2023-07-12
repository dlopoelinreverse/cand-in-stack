import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import AuthButton from "../authentication/AuthButton";
import LogoutButton from "../authentication/LogoutButton";
import Link from "next/link";

export default async function UserBox() {
  const session = await getServerSession(authOptions);
  if (!session) return <AuthButton />;
  const { name, id } = session.user;
  return (
    <div className="flex flex-col items-end gap-5 pt-5">
      <Link href={`/profile/${id}`}>
        <h3 className="text-xl">{name}</h3>
      </Link>
      <LogoutButton />
    </div>
  );
}
