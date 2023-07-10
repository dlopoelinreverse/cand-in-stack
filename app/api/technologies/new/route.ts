import { prisma } from "@/app/libs/prismadb";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const {
    technoName,
    // userId,
    categoryId,
  } = body;

  const session = await getServerSession(authOptions);

  if (!session)
    return new NextResponse("User might be connected", { status: 401 });

  console.log(session);

  const userId = session.user.id;

  console.log("userId : ", userId, "body : ", body);

  if (
    !technoName ||
    // || !userId
    !categoryId
  )
    return new Response("Specify technoName, userId and categoryId fields", {
      status: 400,
    });

  const isTechnoExist = await prisma.technologie.findFirst({
    where: { name: technoName },
  });

  const isUserExist = await prisma.user.findFirst({
    where: { id: userId },
  });

  const isCategoryIdExist = await prisma.category.findFirst({
    where: { id: categoryId },
  });

  if (isTechnoExist)
    return new Response("This techno alerady exist", { status: 406 });

  if (!isUserExist)
    return new Response("UserId didn't founded", { status: 406 });

  if (!isCategoryIdExist)
    return new Response("CategoryId didn't founded", { status: 406 });

  const userRole = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  const newTechnoData = {
    name: technoName,
    isValid: userRole?.role === "ADMIN" || "SUPERADMIN" ? true : false,
    addedBy: userRole?.role === "ADMIN" || "SUPERADMIN" ? userId : undefined,
    suggestedBy: userRole?.role === "USER" ? userId : undefined,
    categoryId,
  };

  try {
    const newTechno = await prisma.technologie.create({
      data: newTechnoData,
    });
    return new Response(JSON.stringify(newTechno), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
