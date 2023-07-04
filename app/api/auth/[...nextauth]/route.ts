import { prisma } from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };

// import { prisma } from "@/app/libs/prismadb";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth";

// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   // adapter: PrismaAdapter(prisma),
//   providers: [
//     // CredentialsProvider({
//     //   name: "Sign in",
//     //   email: {
//     //     label: "Email",
//     //     type: "email",
//     //     placeholder: "example@example.com",
//     //   },
//     //   password: { label: "Password", type: "password" },
//     //   async authorize(credentials) {
//     //     if (!credentials || !credentials.email || !credentials.password)
//     //       return null;
//     //     const dbUser = await prisma.user.findFirst({
//     //       where: { email: credentials.email },
//     //     });
//     //     if (dbUser && dbUser.password === credentials.password)
//     //   },
//     // }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   // pages: {
//   //   signIn: "/auth",
//   // },
//   debug: process.env.NODE_ENV === "development",
//   adapter: PrismaAdapter(prisma),
// };
