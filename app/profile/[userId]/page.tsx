import { isCurrentUser } from "@/utils/isCurrentUser";

export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const isCurrent = await isCurrentUser(params.userId);
  console.log(isCurrent);
  return <div>Coucou</div>;
}
