import { ApplyType, Offer } from "@/app/types/types";
import DisplayTechnologies from "../technologies/DisplayTechnologies";
import Link from "next/link";

interface OfferCardProps {
  offer?: Offer;
  apply?: ApplyType;
  children?: React.ReactElement;
  usage: "offer" | "apply";
}

export default function OfferCard({
  offer,
  apply,
  children,
  usage,
}: OfferCardProps) {
  return (
    <li className="flex flex-col min-h-[300px] justify-center items-center w-[30%] p-5 bg-slate-200">
      {usage === "offer" && <OfferUsage offer={offer}>{children}</OfferUsage>}
      {usage === "apply" && offer && apply && (
        <ApplyUsage offer={offer} apply={apply} />
      )}
    </li>
  );
}

interface OfferUsageProps {
  offer?: Offer;
  children?: React.ReactElement;
}

const OfferUsage = ({ offer, children }: OfferUsageProps) => {
  return <>{!offer ? children : <OfferContentDisplay offer={offer} />}</>;
};

interface ApplyUsageProps {
  offer: Offer;
  apply: ApplyType;
}

const ApplyUsage = ({ offer, apply }: ApplyUsageProps) => {
  return (
    <>
      <p>Statu de la candidature : {apply.status.candidate}</p>
      <OfferContentDisplay offer={offer} />
    </>
  );
};

interface OfferContentDisplayProps {
  offer: Offer;
}

const OfferContentDisplay = ({ offer }: OfferContentDisplayProps) => {
  return (
    <>
      <h3>{offer.title}</h3>
      <DisplayTechnologies technologiesIds={offer.technologiesIds} />
      <p>{offer.description}</p>
      <Link
        href={`/offers/${offer.id}`}
        className="px-3 py-2 transition rounded-xl hover:opacity-50 bg-slate-300"
      >
        Offre
      </Link>
    </>
  );
};
