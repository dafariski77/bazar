import { AppHeader } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: (props) => <AppHeader {...props} />,
        tabBarActiveTintColor: colors.primary[500],
        tabBarLabelStyle: {
          fontFamily: fontFamily.roboto.medium,
          fontSize: fontSize.sm,
          marginTop: 2,
        },
        tabBarStyle: {
          backgroundColor: colors.grayScale[50],
          shadowColor: "transparent",
          borderColor: "transparent",
          paddingTop: 4,
        },
        animation: "shift",
      }}
      initialRouteName="home"
      detachInactiveScreens={true}
      backBehavior="history"
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="home-fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
