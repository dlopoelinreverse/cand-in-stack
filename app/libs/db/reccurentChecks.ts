import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { prisma } from "../prismadb";

export const getSessionFromServer = async () => {
  const session = await getServerSession(authOptions);

  return session;
};

export const isValidOffer = async (offerId: string) => {
  try {
    await prisma.offer.findFirst({
      where: { id: offerId },
    });
    return true;
  } catch (error) {
    return false;
  }
};
