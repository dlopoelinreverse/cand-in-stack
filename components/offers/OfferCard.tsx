import { ApplyType, Offer } from "@/app/types/types";
import DisplayTechnologies from "../technologies/DisplayTechnologies";
import Link from "next/link";

interface OfferCardProps {
  offer?: Offer;
  children?: React.ReactElement;
}

export default function OfferCard({ offer, children }: OfferCardProps) {
  if (!offer)
    return (
      <Link
        href="/offers/create"
        className="flex flex-col min-h-[200px] rounded-lg justify-center items-center border-2 border-slate-200 w-[30%] p-5 hover:bg-slate-100 hover:shadow-md"
      >
        {children}
      </Link>
    );
  return (
    <Link
      href={`/offers/${offer.id}`}
      className="flex flex-col min-h-[200px] rounded-lg justify-center items-center border-2 border-slate-200 w-[30%] p-5 hover:bg-slate-100 hover:shadow-md"
    >
      <h3>{offer.title}</h3>
      <DisplayTechnologies technologiesIds={offer.technologiesIds} />
      <p>{offer.description}</p>
    </Link>
  );
}
