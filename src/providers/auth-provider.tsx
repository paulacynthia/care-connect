import { getServerSession } from "next-auth";
import { Provider } from "./client-auth-provider";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = async ({ children }: AuthProviderProps) => {
  const session = await getServerSession();
  return <Provider session={session}>{children}</Provider>;
};
