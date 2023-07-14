import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { enterpriseId: string } }
) => {
  const { enterpriseId } = context.params;

  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("User must be connected", { status: 401 });

  const isEnterprise = session.user.role === "ENTERPRISE";

  if (!isEnterprise)
    return new NextResponse("User must be an enterprise", { status: 401 });

  // const isCurrentEnterprise = session.user.id === enterpriseId;

  // if (!isCurrentEnterprise)
  //   return new NextResponse("It must be the same enterprise", { status: 401 });
  const isEnterpriseIdExist = await prisma.user.findFirst({
    where: { id: enterpriseId },
  });

  if (!isEnterpriseIdExist)
    return new NextResponse("EnterpriseId not found", { status: 401 });

  try {
    const enterpriseOffers = await prisma.offer.findMany({
      where: { creatorId: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    if (enterpriseOffers.length <= 0)
      return new NextResponse("No offers find for this enterprise", {
        status: 200,
      });
    return new NextResponse(JSON.stringify(enterpriseOffers), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 405 });
  }
};
