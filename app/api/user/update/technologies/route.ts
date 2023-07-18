import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  const body = await request.json();

  const { technologiesIds } = body;

  if (!technologiesIds || technologiesIds.length <= 0) {
    return new NextResponse("Fileds are missing, check technologiesIds", {
      status: 401,
    });
  }

  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("You have to be authenticated", { status: 401 });

  const isValidUser = await prisma.user.findFirst({
    where: { id: session.user.id },
  });

  if (!isValidUser)
    return new NextResponse("User can't be find", { status: 401 });

  for (const technologieId of technologiesIds) {
    try {
      const userTechnologies = await prisma.user.findFirst({
        where: { id: session.user.id },
        select: { userTechnologies: true },
      });
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

  try {
    const updateUserTechnologies = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        userTechnologies: {
          set: [...technologiesIds],
        },
      },
      select: { userTechnologies: true },
    });
    return new NextResponse(JSON.stringify(updateUserTechnologies), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
};
