import { AppButton, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Image } from "expo-image";
import { Dimensions, View } from "react-native";

export function HomeBannerItem() {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.primary[50],
        borderRadius: 6,
        height: 160,
        width: SCREEN_WIDTH - 40,
      }}
    >
      <View
        style={{
          gap: 16,
          padding: 20,
        }}
      >
        <View
          style={{
            gap: 6,
          }}
        >
          <AppText family={fontFamily.openSans.bold} size={fontSize.h4}>
            Special Offer
          </AppText>
          <AppText family={fontFamily.roboto.regular}>Discount 25%</AppText>
        </View>
        <AppButton
          variant="primary"
          style={{
            paddingVertical: 12,
          }}
        >
          Order Now
        </AppButton>
      </View>
      <Image
        source={{
          uri: "https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=500&fit=scale",
        }}
        style={{
          height: "100%",
          width: 120,
          borderRadius: 6,
        }}
      />
    </View>
  );
}
