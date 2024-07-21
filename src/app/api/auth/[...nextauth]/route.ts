import prisma from "@/lib/db";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) {
          return null;
        }

        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        console.log("passwordCorrect", { passwordCorrect });

        if (passwordCorrect) {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
