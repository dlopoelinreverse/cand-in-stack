import CreateOfferForm from "@/components/offers/CreateOfferForm";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreateOfferPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ENTERPRISE") redirect("/");
  const userId = session?.user.id;
  if (!userId) return;
  return (
    <>
      <CreateOfferForm userId={userId} />
    </>
  );
}
