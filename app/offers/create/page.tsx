import CreateOfferForm from "@/components/offers/CreateOfferForm";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function CreateOfferPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return;
  return (
    <>
      <CreateOfferForm userId={userId} />
    </>
  );
}
