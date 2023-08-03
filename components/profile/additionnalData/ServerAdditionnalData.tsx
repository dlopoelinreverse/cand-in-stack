import { prisma } from "@/app/libs/prismadb";
import AdditionnalData from "./AdditionnalData";
import { AnswerType } from "@/app/types/types";

export type AdditionnalApplyDataType = {
  id: string;
  offerTitle: string;
  answers: AnswerType[];
  createdAt: Date;
  enterpriseStatus: string;
};

export const getCandidatesAppliesData = async (candidateId: string) => {
  return await prisma.apply.findMany({
    where: { candidateId },
    select: {
      id: true,
      offerTitle: true,
      answers: true,
      createdAt: true,
      enterpriseStatus: true,
    },
  });
};

export default async function ServerAdditionnalData({
  profileId,
}: {
  profileId: string;
}) {
  const candidateAppliesData = (await getCandidatesAppliesData(
    profileId
  )) as AdditionnalApplyDataType[];

  return <AdditionnalData serverAppliesData={candidateAppliesData} />;
}
