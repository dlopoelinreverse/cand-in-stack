import {
  invalidOfferIdError,
  prismaError,
  sessionError,
} from "@/app/libs/db/errors";
import {
  getSessionFromServer,
  isValidOffer,
} from "@/app/libs/db/reccurentChecks";
import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { offerId, enterpriseId, answers } = body;

  if (!offerId || !enterpriseId || !answers)
    return new NextResponse("Missing fields !", { status: 400 });

  const session = await getSessionFromServer();

  if (!session) return sessionError;

  const validOffer = await isValidOffer(offerId);

  if (!validOffer) return invalidOfferIdError;

  try {
    const newApply = {
      candidateId: session.user.id,
      enterpriseId,
      offerId,
      answers,
    };
    const createApply = await prisma.apply.create({
      data: newApply,
    });
    return new NextResponse(JSON.stringify(createApply), { status: 201 });
  } catch (error) {
    return prismaError(error);
  }
};
