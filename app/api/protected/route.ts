import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return new NextResponse("Not connected", { status: 401 });

  return new NextResponse("T'es là BG", { status: 200 });
};
