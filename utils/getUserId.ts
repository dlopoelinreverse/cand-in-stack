import { getServerSession } from "next-auth";
import { prisma } from "../app/libs/prismadb";
import { authOptions } from "./authOptions";

export const getUserId = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) return null;

  const userId = await prisma.user.findUnique({
    where: { email: String(session.user.email) },
    select: { id: true },
  });

  if (!userId || !userId.id) return null;

  return userId.id;
};
