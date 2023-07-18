import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Applies() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return <div>Applies</div>;
}
