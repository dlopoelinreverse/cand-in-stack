import { prisma } from "@/app/libs/prismadb";
import AdditionnalData from "@/components/profile/AdditionnalData";
import Profile from "@/components/profile/Profile";
import { authOptions } from "@/utils/authOptions";
import { checkUserIdOrRedirect } from "@/utils/userCheck";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const session = await getServerSession(authOptions);
  const { userId } = params;
  if (!userId) return redirect("/");

  await checkUserIdOrRedirect(userId);

  const userData = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!userData) return;

  if (session?.user?.role === "ENTERPRISE")
    return (
      <div>
        <AdditionnalData profileId={userId} />
        <Profile userServerData={userData} />
      </div>
    );

  return <Profile userServerData={userData} />;
}
