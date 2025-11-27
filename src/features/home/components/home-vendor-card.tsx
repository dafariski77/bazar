import { AppPressable } from "@/shared/components/ui";
import { colors } from "@/shared/themes";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function HomeVendorCard() {
  return (
    <AppPressable style={styles.container}>
      <Image
        source={{
          uri: "https://mma.prnewswire.com/media/819539/GoDaddy_Logo.jpg?p=twitter",
        }}
        contentFit="contain"
        contentPosition={"center"}
        style={styles.image}
      />
    </AppPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayScale[50],
    borderRadius: 10,
    width: 100,
    height: 100,
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
