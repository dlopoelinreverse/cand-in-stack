"use client";

import { ApplyType } from "@/app/types/types";
import useCandidateApply from "@/hooks/useCandiateApply";
import Table, { ColumnsType } from "../customs/table/Table";

export default function AppliesTable({
  appliesData,
}: {
  appliesData: ApplyType[];
}) {
  const {
    candiateApplies,
    isLoadingCandidatesApplies,
    isErrorCandidatesApplies,
  } = useCandidateApply(appliesData);

  if (isLoadingCandidatesApplies || !candiateApplies) return <p>Is Loading</p>;

  if (isErrorCandidatesApplies) return <p>Is Error</p>;

  // id: string;
  //   candidateId: string;
  //   offerId: string;
  //   answers: Prisma.Json[] | AnswerType[];
  //   candidateStatus: string;
  //   enterpriseStatus: string;
  //   offerTitle: string;
  //   technologiesIds: string[];
  //   enterpriseName: string;
  //   createdAt: Date;
  //   updatedAt: Date;

  const columns: ColumnsType[] = [
    {
      header: "Tire de l'offre",
      accesId: "offerTitle",
    },
    {
      header: "Date de candidature",
      accesId: "ceratedAt",
      // usage: "date",
    },
    {
      header: "Statut",
      accesId: "candidateStatus",
      // usage: "status",
    },
    {
      header: "Lien vers l'offre",
      accesId: "offerId",
      // usage: "linkToId",
    },
  ];
  return <Table columns={columns} />;
}
