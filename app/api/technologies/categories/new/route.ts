import { prisma } from "@/app/libs/prismadb";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { categoryName } = body;

  const isExist = await prisma.category.findFirst({
    where: { name: categoryName },
  });

  if (isExist)
    return new Response("This category aleready exist", { status: 406 });

  try {
    const newCategory = await prisma.category.create({
      data: { name: categoryName },
    });

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
