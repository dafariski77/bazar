import { colors } from "@/shared/themes";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View } from "react-native";
import { ProfileInfoMenu } from "./profile-info-menu";
import { ProfileMenuItem } from "./profile-menu-item";

const profileMenuItems = [
  {
    title: "My Account",
    icon: <FontAwesome name="user" size={24} color={colors.primary[500]} />,
    href: "/edit-profile",
  },
  {
    title: "Address",
    icon: (
      <Fontisto name="map-marker-alt" size={24} color={colors.primary[500]} />
    ),
    href: "",
  },
  {
    title: "Offers & Promos",
    icon: (
      <MaterialIcons name="discount" size={24} color={colors.primary[500]} />
    ),
    href: "",
  },
  {
    title: "Your Favorites",
    icon: <Ionicons name="heart" size={24} color={colors.primary[500]} />,
    href: "/favorites",
  },
  {
    title: "Order History",
    icon: (
      <MaterialCommunityIcons
        name="clipboard-text"
        size={24}
        color={colors.primary[500]}
      />
    ),
    href: "/order-history",
  },
  {
    title: "Help Center",
    icon: (
      <Ionicons
        name="chatbubble-ellipses"
        size={24}
        color={colors.primary[500]}
      />
    ),
    href: "/help-center",
  },
];

export function ListProfileMenu() {
  return (
    <View
      style={{
        marginHorizontal: -20,
      }}
    >
      <ProfileInfoMenu />
      {profileMenuItems.map((item, index) => (
        <ProfileMenuItem
          key={index}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </View>
  );
}
