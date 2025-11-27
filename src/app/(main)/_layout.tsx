import { AppHeader } from "@/shared/components/ui";
import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
      }}
      initialRouteName="(tabs)"
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{
          title: "My Account",
        }}
      />
      <Stack.Screen
        name="favorites"
        options={{
          title: "Your Favorites",
        }}
      />
    </Stack>
  );
}
