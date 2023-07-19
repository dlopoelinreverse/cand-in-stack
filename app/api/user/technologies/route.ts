import { invalidUserIdError, prismaError } from "@/app/libs/db/errors";
import { checkIsValidUser } from "@/app/libs/db/reccurentChecks";
import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("You have to be authenticated", { status: 401 });

  const userId = session.user.id;

  const isValidUser = await checkIsValidUser(userId);

  if (!isValidUser) return invalidUserIdError;

  try {
    const userTechnologies = await prisma.user.findFirst({
      where: { id: userId },
      select: { userTechnologies: true },
    });
    return new NextResponse(JSON.stringify(userTechnologies), {
      status: 200,
    });
  } catch (error) {
    return prismaError(error);
  }
};
