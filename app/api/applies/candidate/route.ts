import { prismaError, sessionError } from "@/app/libs/db/errors";
import { getSessionFromServer } from "@/app/libs/db/reccurentChecks";
import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getSessionFromServer();

  if (!session) return sessionError;

  try {
    const candidateApplies = await prisma.apply.findMany({
      where: { candidateId: session.user.id },
    });
    if (candidateApplies.length <= 0)
      return new NextResponse(JSON.stringify([]), {
        status: 200,
        statusText: "No applies for this candidates",
      });
    return new NextResponse(JSON.stringify(candidateApplies), { status: 200 });
  } catch (error) {
    return prismaError(error);
  }
};
