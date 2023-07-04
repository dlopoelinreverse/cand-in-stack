"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useAuthentication() {
  const [isConnected, setIsConnected] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    status === "authenticated" ? setIsConnected(true) : setIsConnected(false);
  }, [status]);

  return { session, status, isConnected, signOut };
}
