"use client";

import { ApplyType } from "@/app/types/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ApplyType>[] = [
  {
    accessorKey: "offerTitle",
    header: "Titre de l'offre",
  },
  {
    accessorKey: "enterpriseName",
    header: "Nom de l'entreprise",
  },
  {
    accessorKey: "offerTitle",
    header: "Titre de l'offre",
  },
  {
    accessorKey: "offerTitle",
    header: "Titre de l'offre",
  },
];
