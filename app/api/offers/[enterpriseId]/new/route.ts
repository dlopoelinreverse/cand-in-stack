import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  request: NextRequest,
  context: { params: { enterpriseId: string } }
) => {
  const { enterpriseId } = context.params;
  const body = await request.json();
  const { title, jobType, technologiesIds, description } = body;
  console.log(body);
  if (!title || !technologiesIds || technologiesIds.length <= 0 || !description)
    return new NextResponse(
      "Fileds are missing, check creatorId and technologiesIds",
      { status: 401 }
    );

  for (const technologieId of technologiesIds) {
    try {
      const isTechnologieExist = await prisma.technologie.findUnique({
        where: { id: technologieId },
      });
      if (!isTechnologieExist)
        return new NextResponse(`${technologieId} doesn't exist`, {
          status: 401,
        });
    } catch (error) {
      return new NextResponse(`${technologieId} doesn't exist : ${error}`, {
        status: 401,
      });
    }
  }

  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("User must be connected", { status: 401 });

  const isEnterprise = session.user.role === "ENTERPRISE";

  if (!isEnterprise)
    return new NextResponse("User must be an enterprise", { status: 401 });

  const isCurrentEnterprise = session.user.id === enterpriseId;

  if (!isCurrentEnterprise)
    return new NextResponse("It must be the same enterprise", { status: 401 });

  const isEnterpriseIdExist = await prisma.user.findFirst({
    where: { id: enterpriseId },
  });

  if (!isEnterpriseIdExist)
    return new NextResponse("EnterpriseId not found", { status: 401 });

  const newOfferData = {
    title,
    creatorId: enterpriseId,
    jobType,
    technologiesIds,
    description,
  };
  try {
    const newOffer = await prisma.offer.create({ data: newOfferData });
    return new NextResponse(JSON.stringify(newOffer), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 405 });
  }
};
