import { prisma } from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const offers = await prisma.offer.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (offers.length <= 0)
      return new NextResponse(JSON.stringify([]), {
        status: 200,
        statusText: "No offers yet",
      });
    return new NextResponse(JSON.stringify(offers), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 406 });
  }
};
