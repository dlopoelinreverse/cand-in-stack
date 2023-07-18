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

export const GET = async (
  request: NextRequest,
  context: { params: { offerId: string } }
) => {
  const { offerId } = context.params;

  const validOffer = await isValidOffer(offerId);

  if (!validOffer) return invalidOfferIdError;

  try {
    const offerData = await prisma.offer.findFirst({ where: { id: offerId } });
    return new NextResponse(JSON.stringify(offerData), { status: 200 });
  } catch (error) {
    return prismaError(error);
  }
};

export const PATCH = async (
  request: NextRequest,
  context: { params: { offerId: string } }
) => {
  const { offerId } = context.params;

  const body = await request.json();

  const { updatedData, updatedKeys } = body;

  const session = await getSessionFromServer();

  if (!session) return sessionError;

  const validOffer = await isValidOffer(offerId);

  if (!validOffer) return invalidOfferIdError;

  let newData = {};

  for (const key of updatedKeys) {
    const newValue = { [key]: updatedData[key] };
    newData = { ...newData, ...newValue };
  }

  try {
    const updatedOffer = await prisma.offer.update({
      where: { id: offerId },
      data: { ...newData },
    });
    return new NextResponse(JSON.stringify(updatedOffer), { status: 201 });
  } catch (error) {
    return prismaError(error);
  }
};
