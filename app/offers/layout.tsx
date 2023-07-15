import ProfileBox from "@/components/profileBox/ProfileBox";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { prisma } from "../libs/prismadb";

export default async function OffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ENTERPRISE") redirect("/");

  const userData = await prisma.user.findFirst({
    where: { id: session.user.id },
  });

  return (
    <div className="flex">
      <div className="w-2/3">{children}</div>
      <div className="w-1/3">
        {userData && <ProfileBox userData={userData} />}
      </div>
    </div>
  );
}
