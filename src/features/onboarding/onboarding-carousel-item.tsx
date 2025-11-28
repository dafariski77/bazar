import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, View } from "react-native";

export function OnboardingCarouselItem() {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.container,
        {
          width: SCREEN_WIDTH - 40,
        },
      ]}
    >
      <Image
        source={require("@/shared/assets/onboarding/slide1.png")}
        style={styles.image}
        contentFit="contain"
        contentPosition={"center"}
      />
      <AppText
        size={fontSize.h3}
        family={fontFamily.openSans.bold}
        style={{
          textAlign: "center",
        }}
      >
        {"Now reading books \n will be easier"}
      </AppText>
      <AppText
        size={fontSize.lg}
        family={fontFamily.roboto.regular}
        color={colors.grayScale[500]}
        style={{
          textAlign: "center",
          lineHeight: 24,
        }}
      >
        Discover new worlds, join a vibrant reading community. Start your
        reading adventure effortlessly with us.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    height: 320,
    width: "100%",
  },
});
