import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

type User = {
  id: string;
  role: string;
};

declare module "next-auth" {
  interface Session {
    id: string;
    user: User;
  }

  interface User {
    id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
