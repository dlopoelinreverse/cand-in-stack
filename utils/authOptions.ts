import { prisma } from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Sign in",
    //   email: {
    //     label: "Email",
    //     type: "email",
    //     placeholder: "example@example.com",
    //   },
    //   password: { label: "Password", type: "password" },
    //   async authorize(credentials) {
    //     if (!credentials || !credentials.email || !credentials.password)
    //       return null;
    //     const dbUser = await prisma.user.findFirst({
    //       where: { email: credentials.email },
    //     });
    //     // if (dbUser && dbUser.password === credentials.password)
    //   },
    // }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token, user }) {
      if (!user) {
        session.user.role = token.role;
        session.user.id = String(token.sub);
      } else {
        session.user.role = user.role;
        session.user.id = String(user.id);
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
};
