import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useAuthentication() {
  const [isConnected, setIsConnected] = useState(false);
  const { data: session, status } = useSession();

  const userRole = session?.user?.role;

  const userId = session?.user?.id;

  useEffect(() => {
    status === "authenticated" ? setIsConnected(true) : setIsConnected(false);
  }, [status]);

  return { session, status, isConnected, userRole, userId, signOut };
}
