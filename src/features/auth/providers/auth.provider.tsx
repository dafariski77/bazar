import { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";
import { useSession } from "../hooks";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const value = useSession();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
