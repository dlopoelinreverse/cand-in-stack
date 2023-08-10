import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { prisma } from "../libs/prismadb";
import { appliesColumns } from "../../components/applies/appliesColumns";
import { ApplyType } from "../types/types";
import DataTable from "@/components/customs/DataTable";

export default async function Applies() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "USER") redirect("/");

  const candidateApplies = (await prisma.apply.findMany({
    where: { candidateId: session.user.id },
  })) as ApplyType[];

  return <DataTable columns={appliesColumns} data={candidateApplies} />;
}
