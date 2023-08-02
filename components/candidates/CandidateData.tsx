import { OfferApplyDataType } from "@/app/types/types";
import Link from "next/link";

interface CandidateDataProps {
  apply: OfferApplyDataType;
}

export default function CandidateData({ apply }: CandidateDataProps) {
  const timeStamp = Date.parse(apply.applyDate);
  const applyDate = new Date(timeStamp).toLocaleDateString("FR-fr");

  return (
    <li className="flex justify-between w-5/6 p-6 mx-auto rounded-full bg-slate-300">
      <h3 className="ml-4">{apply.candidateName}</h3>
      <p>a candidaté le : {applyDate}</p>
      <Link href={`/profile/${apply.candidateId}`} className="mr-4">
        Profil
      </Link>
    </li>
  );
}
