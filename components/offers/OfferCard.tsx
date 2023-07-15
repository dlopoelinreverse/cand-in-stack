import { Offer } from "@/app/types/types";
import DisplayTechnologies from "../technologies/DisplayTechnologies";
import Link from "next/link";

interface OfferCardProps {
  offer?: Offer;
  children?: React.ReactElement;
}

export default function OfferCard({ offer, children }: OfferCardProps) {
  return (
    <li className="flex flex-col min-h-[300px] justify-center items-center w-[30%] p-5 bg-slate-200">
      {!offer ? (
        children
      ) : (
        <>
          <h3>{offer.title}</h3>
          <DisplayTechnologies technologyIds={offer.technologiesIds} />
          <p>{offer.description}</p>
          <Link
            href={`/offers/${offer.id}`}
            className="px-3 py-2 transition rounded-xl hover:opacity-50 bg-slate-300"
          >
            Offre
          </Link>
        </>
      )}
    </li>
  );
}
