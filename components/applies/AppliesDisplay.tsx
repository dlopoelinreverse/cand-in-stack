"use client";
import { ApplyType } from "@/app/types/types";
import useCandidateApply from "@/hooks/useCandiateApply";
interface AppliesDisplayProps {
  candidateServerApplies: ApplyType[];
}

export default function AppliesDisplay({
  candidateServerApplies,
}: AppliesDisplayProps) {
  const {
    candiateApplies,
    isLoadingCandidatesApplies,
    isErrorCandidatesApplies,
  } = useCandidateApply(candidateServerApplies);

  if (isLoadingCandidatesApplies || !candiateApplies) return <p>Is Loading</p>;

  if (isErrorCandidatesApplies) return <p>Is Error</p>;

  const appliesContentElements = candiateApplies.map((apply) => {
    return {
      id: apply.id,
      title: apply.offerData.title,
      date: apply.createdAt,
      technologiesIds: apply.offerData.technologiesIds,
      status: apply.status.candidate,
      link: {
        href: apply.offerId,
        label: "Vers l'offre",
      },
    };
  });

  return <></>;
}
