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

  // get offer data
  let offerTitle;
  let technologiesIds;
  let enterpriseName;
  let candidateName;
  try {
    const offerData = await prisma.offer.findFirst({
      where: { id: offerId },
      select: { title: true, technologiesIds: true },
    });
    offerTitle = offerData?.title;
    technologiesIds = offerData?.technologiesIds;

    if (!offerTitle || !technologiesIds)
      return new NextResponse("Cannot find offertitle or technologiesIds", {
        status: 401,
      });
  } catch (error) {
    return prismaError(error);
  }

  try {
    const enterpriseData = await prisma.user.findFirst({
      where: { id: enterpriseId },
      select: { name: true },
    });
    enterpriseName = enterpriseData?.name;
    if (!enterpriseName)
      return new NextResponse("Cannot find enterpriseName", {
        status: 401,
      });
  } catch (error) {
    return prismaError(error);
  }

  try {
    const candidateData = await prisma.user.findFirst({
      where: { id: session.user.id },
      select: { name: true },
    });
    candidateName = candidateData?.name;
    if (!candidateName)
      return new NextResponse("Cannot find candidateName", {
        status: 401,
      });
  } catch (error) {
    return prismaError(error);
  }

  try {
    const newApply = {
      candidateId: session.user.id,
      enterpriseId,
      offerId,
      answers,
      candidateStatus: "sent",
      enterpriseStatus: "unread",
      offerTitle,
      technologiesIds,
      enterpriseName,
      candidateName,
    };
    const createApply = await prisma.apply.create({
      data: newApply,
    });
    const applyId = createApply.id;
    const offer = await prisma.offer.findFirst({ where: { id: offerId } });
    offer?.appliesIds.push(applyId);
    await prisma.offer.update({
      where: { id: offerId },
      data: { appliesIds: offer?.appliesIds },
    });
    return new NextResponse(JSON.stringify(createApply), { status: 201 });
  } catch (error) {
    return prismaError(error);
  }
};
