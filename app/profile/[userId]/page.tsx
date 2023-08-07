import { prisma } from "@/app/libs/prismadb";
import Profile from "@/components/profile/Profile";
import { checkUserIdOrRedirect } from "@/utils/userCheck";
import { redirect } from "next/navigation";

export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  if (!userId) return redirect("/");

  await checkUserIdOrRedirect(userId);

  const userData = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!userData) return;

  const profileUserRole = userData.role;

  return (
    <Profile userServerData={userData} profileUserRole={profileUserRole} />
  );
}
