import { prisma } from "@/app/libs/prismadb";
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

  return <div>{userId}</div>;
}
