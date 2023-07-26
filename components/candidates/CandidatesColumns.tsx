"use client";

import { ApplyType, EnterpriseOffersWithApplies } from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Button from "../customs/Button";

export const candidatesColumns: ColumnDef<EnterpriseOffersWithApplies>[] = [
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
    accessorKey: "appliesIds",
    header: "Candidats",
    cell: ({ row }) => {
      const appliesIds = row.getValue("appliesIds") as string[];
      const appliesCount = appliesIds.length;
      return (
        <Button
          label={`${appliesCount} candidat${appliesCount > 1 ? "s" : ""}`}
        />
      );
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
