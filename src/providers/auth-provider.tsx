import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Provider } from "./client-auth-provider";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = async ({ children }: AuthProviderProps) => {
  const session = await getServerSession(authOptions);
  return <Provider session={session}>{children}</Provider>;
};
