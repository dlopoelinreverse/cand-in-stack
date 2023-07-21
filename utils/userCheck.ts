import { prisma } from "@/app/libs/prismadb";
import { redirect } from "next/navigation";

export const checkUserIdOrRedirect = async (userId: string) => {
  try {
    await prisma.user.findFirst({
      where: { id: userId },
    });
  } catch (error) {
    return redirect("/");
  }
};
