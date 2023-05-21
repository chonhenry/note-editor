import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import { prisma } from "@/lib/prisma";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const OPTIONS: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      // console.log("******");
      // console.log(session);
      // console.log("------");
      // console.log(user);
      // console.log("------");
      // console.log(token);
      // console.log("******");
      if (session?.user) {
        // session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };

//118392691377640344978