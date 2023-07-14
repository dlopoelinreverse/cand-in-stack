import OffersDisplay from "@/components/offers/OffersDisplay";
import Filters from "@/components/offersFilters/Filters";
import { prisma } from "./libs/prismadb";

export default async function Home() {
  const offers = await prisma.offer.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      <Filters />
      <OffersDisplay offers={offers} />
    </div>
  );
}
