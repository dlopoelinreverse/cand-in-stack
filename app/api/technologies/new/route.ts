import { prisma } from "@/app/libs/prismadb";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { technoName } = body;

  const isExist = await prisma.technologie.findFirst({
    where: { name: technoName },
  });

  if (isExist)
    return new Response("This techno alerady exist", { status: 406 });

  try {
    // const newTechno = await prisma.technologie.create({
    //   data: { name: technoName },
    // });
    // return new Response(JSON.stringify(newTechno), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
