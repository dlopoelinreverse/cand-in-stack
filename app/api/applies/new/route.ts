import {
  invalidOfferIdError,
  prismaError,
  sessionError,
} from "@/app/libs/db/errors";
import { getSession, isValidOffer } from "@/app/libs/db/reccurentChecks";
import { prisma } from "@/app/libs/prismadb";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { offerId } = body;

  const session = await getSession();

  if (!session) return sessionError;

  const validOffer = await isValidOffer(offerId);

  if (!validOffer) return invalidOfferIdError;

  try {
    // creer schema Apply
    // const newApply = await prisma.a;
  } catch (error) {
    return prismaError(error);
  }
};
