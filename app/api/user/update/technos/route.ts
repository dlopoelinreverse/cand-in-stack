import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("You have to be authenticated", { status: 401 });

  const isValidUser = await prisma.user.findFirst({
    where: { id: session.user.id },
  });

  if (!isValidUser)
    return new NextResponse("User can't be find", { status: 401 });
};
