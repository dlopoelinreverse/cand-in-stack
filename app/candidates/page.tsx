import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "../libs/prismadb";
import DataTable from "../../components/customs/DataTable";
import { offersColumns } from "@/components/candidates/OffersColumns";

const getEnterpriseOffersWithAppliesData = async (enterpriseId: string) => {
  const enterpriseOffersData = await prisma.offer.findMany({
    where: { creatorId: enterpriseId },
    select: {
      id: true,
      title: true,
      city: true,
      createdAt: true,
      appliesData: true,
    },
  });
  return enterpriseOffersData;
};

export default async function Candidates() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ENTERPRISE") redirect("/");

  const enterpriseOffersWithApplies = await getEnterpriseOffersWithAppliesData(
    session.user.id
  );

  return (
    <DataTable columns={offersColumns} data={enterpriseOffersWithApplies} />
  );
}
