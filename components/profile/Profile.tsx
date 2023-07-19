import { prisma } from "@/app/libs/prismadb";
import { User } from "@prisma/client";
import OffersDisplay from "../offers/OffersDisplay";
import ProfileData from "./ProfileData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import UserTechnologies from "../technologies/userTechnologies/UserTechnologies";

interface ProfileProps {
  userServerData: User;
  userRole: string;
}

export default async function Profile({
  userServerData,
  userRole,
}: ProfileProps) {
  const session = await getServerSession(authOptions);

  const isCurrentUser = session?.user?.id === userServerData.id;

  if (userServerData.role === "ENTERPRISE") {
    const enterpriseOffers = await prisma.offer.findMany({
      where: { creatorId: userServerData.id },
      take: 10,
      orderBy: { createdAt: "desc" },
    });
    return (
      <div className="flex w-full">
        <div className="w-2/3">
          <OffersDisplay offers={enterpriseOffers} />
        </div>
        <div className="w-1/3">
          <ProfileData
            userServerData={userServerData}
            isCurrentUser={isCurrentUser}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <div className="w-2/3">
        <h1 className="text-center">Technos & Projects</h1>
        <UserTechnologies
          userServerData={userServerData}
          isCurrentUser={isCurrentUser}
        />
      </div>
      <div className="w-1/3">
        <ProfileData
          userServerData={userServerData}
          isCurrentUser={isCurrentUser}
        />
      </div>
    </div>
  );
}
