import { prisma } from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

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
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "exemple@email.com",
        },
        password: { label: "Mot de passe", type: "password" },
        username: {
          label: "Nom d'utilisateur",
          type: "text",
          placeholder: "Eric Dupont",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password)
          throw new Error("Pleae enter an email and password");

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user?.hashedPassword) throw new Error("No user found");

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMatch) throw new Error("Incorrect password");

        return user as any;
      },
    }),
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
