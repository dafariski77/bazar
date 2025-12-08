import { supabase } from "@/shared/lib";
import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

type SessionState = {
  session: Session | null;
  user: User | null;
  loading: boolean;
};

export function useSession(): SessionState {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return { session, user, loading };
}
