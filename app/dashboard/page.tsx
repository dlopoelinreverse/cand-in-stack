import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/dashboard");
  }
  const userRole = session.user?.role;
  if (userRole === "USER") {
    console.log("not admin", userRole);
    return redirect("/");
  }

  return <div className="flex items-center justify-center h-full"></div>;
}
