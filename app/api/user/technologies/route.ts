import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("You have to be authenticated", { status: 401 });

  const isValidUser = await prisma.user.findFirst({
    where: { id: session.user.id },
  });

  if (!isValidUser)
    return new NextResponse("User can't be find", { status: 401 });

  try {
    const userTechnologies = await prisma.user.findFirst({
      where: { id: session.user.id },
      select: { userTechnologies: true },
    });
    return new NextResponse(JSON.stringify(userTechnologies), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 405 });
  }
};
