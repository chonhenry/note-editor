import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) {
    //     console.log(`1. ${baseUrl}${url}`);
    //     return `${baseUrl}${url}`;
    //   }
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) {
    //     console.log("2.", url);
    //     return url;
    //   }
    //   console.log("3. ", baseUrl);
    //   return baseUrl;
    // },
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };

// http://localhost:3000/api/auth/signin?callbackUrl=%2Fdashboard
