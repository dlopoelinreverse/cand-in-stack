"use client";

import { ApplyType } from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import StatusBadge from "./StatusBadge";

export const appliesColumns: ColumnDef<ApplyType>[] = [
  {
    accessorKey: "offerTitle",
    header: "Titre de l'offre",
  },
  {
    accessorKey: "enterpriseName",
    header: "Nom de l'entreprise",
  },
  {
    accessorKey: "createdAt",
    header: "Date de candidature",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      const parsedDate = date.toLocaleDateString("fr-FR");
      return <h3>{parsedDate}</h3>;
    },
  },
  {
    accessorKey: "candidateStatus",
    header: "Statut de la candidature",
    cell: ({ row }) => {
      const status = row.getValue("candidateStatus") as
        | "sent"
        | "unread"
        | "ongoing"
        | "acepted"
        | "rejected";
      return <StatusBadge status={status} />;
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
