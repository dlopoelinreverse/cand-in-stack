import ServerAdditionnalData from "@/components/profile/additionnalData/ServerAdditionnalData";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const session = await getServerSession(authOptions);

  const profileId = params.userId;

  const isEnterpriseVisiting =
    session?.user?.role === "ENTERPRISE" && session?.user?.id !== profileId;

  return (
    <div className="flex flex-col justify-center mt-10">
      {isEnterpriseVisiting && <ServerAdditionnalData profileId={profileId} />}
      {children}
    </div>
  );
}
