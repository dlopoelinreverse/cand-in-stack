import { prisma } from "@/app/libs/prismadb";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    if (categories.length <= 0)
      return new Response("No category found", { status: 200 });

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
