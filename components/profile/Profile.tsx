import { prisma } from "@/app/libs/prismadb";
import { User } from "@prisma/client";
import OffersDisplay from "../offers/OffersDisplay";
import ProfileData from "./ProfileData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import UserTechnologies from "../technologies/userTechnologies/UserTechnologies";

interface ProfileProps {
  userServerData: User;
  profileUserRole: string;
}

export default async function Profile({
  userServerData,
  profileUserRole,
}: ProfileProps) {
  const session = await getServerSession(authOptions);

  const isCurrentUser = session?.user?.id === userServerData.id;

  if (
    userServerData.role === "ENTERPRISE" ||
    profileUserRole === "ENTERPRISE"
  ) {
    const enterpriseOffers = await prisma.offer.findMany({
      where: { creatorId: userServerData.id },
      take: 10,
      orderBy: { createdAt: "desc" },
    });

    if (profileUserRole === "ENTERPRISE") {
      console.log("coucou");
      return (
        <div className="flex">
          <div className="w-2/3">
            <OffersDisplay
              offers={enterpriseOffers}
              usage="enterpriseProfile"
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

    return (
      <div className="flex">
        <div className="w-2/3">
          <OffersDisplay
            offers={enterpriseOffers}
            enterpriseId={userServerData.id}
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
