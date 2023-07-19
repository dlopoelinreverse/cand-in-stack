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

export const PATCH = async (request: NextRequest) => {
  const body = await request.json();

  const { updatedData } = body;

  console.log(updatedData);

  if (!updatedData) return new NextResponse("Missing fields", { status: 400 });

  const session = await getSessionFromServer();

  if (!session) return sessionError;

  const isValidUser = await checkIsValidUser(session.user.id);

  if (!isValidUser) return invalidUserIdError;

  try {
    const newProfileData = await prisma.user.update({
      where: { id: session.user.id },
      data: updatedData,
    });
    return new NextResponse(JSON.stringify(newProfileData), { status: 201 });
  } catch (error) {
    return prismaError(error);
  }
};
