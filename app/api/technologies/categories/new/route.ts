import { prisma } from "@/app/libs/prismadb";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { categoryName, userId } = body;

  if (!categoryName || !userId)
    return new Response("Specify category name and userId  fields", {
      status: 400,
    });

  const isUserExist = await prisma.user.findFirst({
    where: { id: userId },
  });

  const isCategoryExist = await prisma.category.findFirst({
    where: { name: categoryName },
  });

  if (isCategoryExist)
    return new Response("Category already exist.", { status: 406 });

  if (!isUserExist)
    return new Response("UserId didn't founded.", { status: 406 });

  const userRole = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  const newCategoryData = {
    name: categoryName,
    isValid: userRole?.role === "ADMIN" || "SUPERADMIN" ? true : false,
    addedBy: userRole?.role === "ADMIN" || "SUPERADMIN" ? userId : undefined,
    suggestedBy: userRole?.role === "USER" ? userId : undefined,
  };

  try {
    const newCategory = await prisma.category.create({
      data: newCategoryData,
    });

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
