import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session)
    return new NextResponse("You have to be authenticated", { status: 401 });

  try {
    const userData = await prisma.user.findFirst({
      where: { id: session.user.id },
    });
    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 405 });
  }
};
