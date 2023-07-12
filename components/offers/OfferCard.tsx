import { Offer } from "@/app/types/types";
import DisplayTechnologies from "../technologies/DisplayTechnologies";

interface OfferCardProps {
  offer?: Offer;
  children?: React.ReactElement;
}

export default function OfferCard({ offer, children }: OfferCardProps) {
  return (
    <li className="flex flex-col min-h-[300px] justify-center items-center m-3 w-1/3 p-5 bg-slate-200">
      {!offer ? (
        children
      ) : (
        <>
          <h3>{offer.title}</h3>
          <DisplayTechnologies technologyIds={offer.technologiesIds} />
        </>
      )}
    </li>
  );
}
