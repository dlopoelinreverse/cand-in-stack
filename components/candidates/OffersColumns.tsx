"use client";

import {
  EnterpriseOffersWithApplies,
  OfferApplyDataType,
} from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import CandidatesList from "./CandidatesList";

export const offersColumns: ColumnDef<EnterpriseOffersWithApplies>[] = [
  {
    accessorKey: "title",
    header: "Titre de l'offre",
  },
  {
    accessorKey: "createdAt",
    header: "Création de l'offre",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      const parsedDate = date.toLocaleDateString("fr-FR");
      return <h3>{parsedDate}</h3>;
    },
  },
  {
    accessorKey: "appliesData",
    header: "Candidats",
    cell: ({ row }) => {
      const appliesData = row.getValue("appliesData") as OfferApplyDataType[];

      return <CandidatesList applies={appliesData} />;
    },
  },
  {
    accessorKey: "offerId",
    header: "",
    cell: ({ row }) => {
      const offerId = String(row.getValue("offerId"));
      return <Link href={`/offers/${offerId}`}>Vers l&apos;offre</Link>;
    },
  },
];
