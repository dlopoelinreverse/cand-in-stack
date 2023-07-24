"use client";
import { ApplyType } from "@/app/types/types";
import useCandidateApply from "@/hooks/useCandiateApply";
import ApplyCard from "./ApplyCard";

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
  return (
    <ul>
      {candiateApplies.map((apply) => (
        <ApplyCard key={apply.id} apply={apply} />
      ))}
    </ul>
  );
}
