import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "../libs/prismadb";
import DataTable from "@/components/customs/DataTable";

export default async function Candidates() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ENTERPRISE") redirect("/");

  const enterpriseApplies = await prisma.apply.findMany({
    where: { enterpriseId: session.user.id },
  });

  console.log(enterpriseApplies);

  // return <DataTable columns={appliesColumns} data={candidateApplies} />;
}
