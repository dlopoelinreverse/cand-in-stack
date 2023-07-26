import { OfferApplyDataType } from "@/app/types/types";
import Link from "next/link";

interface CandidateDataProps {
  apply: OfferApplyDataType;
}

export default function CandidateData({ apply }: CandidateDataProps) {
  return (
    <li>
      <h3>{apply.candidateName}</h3>
      <Link href={`/profile/${apply.candidateId}`}>Profil</Link>
    </li>
  );
}
