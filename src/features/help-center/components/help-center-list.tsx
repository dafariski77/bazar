import { colors } from "@/shared/themes";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { HelpCenterCard } from "./help-center-card";

export function HelpCenterList() {
  return (
    <View style={styles.container}>
      <HelpCenterCard
        icon={<Ionicons name="mail" size={30} color={colors.primary[500]} />}
        title="Email"
        description="Send to your email"
      />
      <HelpCenterCard
        icon={
          <Foundation name="telephone" size={34} color={colors.primary[500]} />
        }
        title="Phone Number"
        description="Send to your phone"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
