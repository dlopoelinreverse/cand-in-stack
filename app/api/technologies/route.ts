import { prisma } from "@/app/libs/prismadb";

export const GET = async () => {
  try {
    const technologies = await prisma.technologie.findMany();

    if (technologies.length <= 0)
      return new Response("No technology found", { status: 200 });

    return new Response(JSON.stringify(technologies), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
