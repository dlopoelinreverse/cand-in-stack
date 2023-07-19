import { prisma } from "@/app/libs/prismadb";
import Profile from "@/components/profile/Profile";
import { redirect } from "next/navigation";

export default async function UserProfile({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  if (!userId) return redirect("/");
  try {
    await prisma.user.findFirst({
      where: { id: userId },
    });
  } catch (error) {
    return redirect("/");
  }

  const userData = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!userData) return;

  const userRole = userData.role;

  return (
    <div>
      <Profile userServerData={userData} userRole={userRole} />
    </div>
  );
}
