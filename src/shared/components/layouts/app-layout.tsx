import { useAuth } from "@/features/auth/hooks";
import { Stack } from "expo-router";
import { AppHeader } from "../ui";

export function AppLayout() {
  const { session, loading } = useAuth();

  // TODO: ADD BACKDROP LOADER
  if (loading) return null;

  return (
    <Stack
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}
    >
      <Stack.Protected guard={!session}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register" />
      </Stack.Protected>
      <Stack.Protected guard={!!session}>
        <Stack.Screen
          name="(main)"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
