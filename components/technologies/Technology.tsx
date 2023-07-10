import { prisma } from "@/app/libs/prismadb";
import React from "react";

export default async function Technology({
  technologyId,
}: {
  technologyId: string;
}) {
  const technology = await prisma.technologie.findFirst({
    where: { id: technologyId },
  });
  if (!technology) return;
  return <div>{technology.name}</div>;
}
