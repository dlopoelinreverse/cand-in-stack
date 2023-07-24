import {
  invalidUserIdError,
  prismaError,
  sessionError,
} from "@/app/libs/db/errors";
import {
  checkIsValidUser,
  getSessionFromServer,
} from "@/app/libs/db/reccurentChecks";
import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { userId: string } }
) => {
  const session = await getSessionFromServer();

  if (!session) return sessionError;

  const { userId } = context.params;

  const isUserIdValid = await checkIsValidUser(userId);

  if (!isUserIdValid) return invalidUserIdError;

  try {
    const userData = await prisma.user.findFirst({ where: { id: userId } });
    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    return prismaError(error);
  }
};
