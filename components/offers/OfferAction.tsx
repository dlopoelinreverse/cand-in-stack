import useAuthentication from "@/hooks/useAuthentication";
import Button from "../customs/Button";
import ApplyForm from "../apply/ApplyForm";
import EdditOfferForm from "./EdditOfferForm";
import { Offer } from "@/app/types/types";

export default function OfferAction({ offer }: { offer: Offer }) {
  const { userRole, userId } = useAuthentication();
  if (!userRole) return <Button label="Candidater" disabled />;
  if (userRole === "USER") return <ApplyForm />;
  if (userRole === "ENTERPRISE" && offer.creatorId === userId)
    return <EdditOfferForm offer={offer} />;
}
