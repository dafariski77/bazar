import { AppButton, AppPressable, AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { forwardRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const DetailBookSheet = forwardRef<BottomSheetModal>((_, ref) => {
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["90%"]}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.sheet}
      handleIndicatorStyle={styles.indicator}
      handleStyle={styles.handle}
    >
      <BottomSheetView>
        <SafeAreaView edges={["bottom"]}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image
              source={{ uri: BOOK_IMAGE }}
              style={styles.cover}
              contentFit="cover"
            />

            <View style={styles.info}>
              <Header />
              <PublisherLogo />
              <Description />
              <Review />
              <CounterAndPrice />
              <Actions />
            </View>
          </ScrollView>
        </SafeAreaView>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

DetailBookSheet.displayName = "DetailBookSheet";

const renderBackdrop = (props: any) => (
  <BottomSheetBackdrop
    {...props}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    pressBehavior="close"
  />
);

const Header = () => (
  <View style={styles.header}>
    <AppText family={fontFamily.openSans.bold} size={fontSize.h4}>
      No Longer Human
    </AppText>
    <Ionicons name="heart" size={26} color={colors.primary[500]} />
  </View>
);

const PublisherLogo = () => (
  <Image
    source={{ uri: LOGO }}
    contentFit="contain"
    style={styles.logo}
    contentPosition={"left bottom"}
  />
);

const Description = () => (
  <AppText
    numberOfLines={3}
    family={fontFamily.roboto.regular}
    color={colors.grayScale[500]}
    style={styles.desc}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae pariatur
    deserunt dicta facilis!
  </AppText>
);

const Review = () => (
  <View>
    <AppText family={fontFamily.openSans.bold} size={fontSize.h4}>
      Review
    </AppText>
    <View style={styles.ratingRow}>
      {[...Array(4)].map((_, i) => (
        <AntDesign key={i} name="star" size={26} color={colors.yellow} />
      ))}
      <AntDesign name="star" size={26} color={colors.grayScale[900]} />
      <AppText family={fontFamily.roboto.semibold} size={fontSize.lg}>
        (4.0)
      </AppText>
    </View>
  </View>
);

const CounterAndPrice = () => (
  <View style={styles.counterRow}>
    <View style={styles.counterBox}>
      <CounterButton icon="minus" />
      <AppText family={fontFamily.roboto.semibold} size={fontSize.xl}>
        1
      </AppText>
      <CounterButton icon="plus" primary />
    </View>

    <AppText
      family={fontFamily.roboto.semibold}
      size={fontSize.xl}
      color={colors.primary[500]}
    >
      $39.99
    </AppText>
  </View>
);

const CounterButton = ({
  icon,
  primary,
}: {
  icon: "plus" | "minus";
  primary?: boolean;
}) => (
  <AppPressable style={[styles.counterBtn, primary && styles.primaryBtn]}>
    <AntDesign
      name={icon}
      size={16}
      color={primary ? colors.white : undefined}
    />
  </AppPressable>
);

const Actions = () => (
  <View style={styles.actionRow}>
    <AppButton style={styles.continueBtn}>Continue Shopping</AppButton>
    <AppPressable style={styles.cartBtn}>
      <AppText
        size={fontSize.h6}
        family={fontFamily.openSans.bold}
        color={colors.primary[500]}
      >
        View Cart
      </AppText>
    </AppPressable>
  </View>
);

const styles = StyleSheet.create({
  sheet: { borderRadius: 30 },
  indicator: { backgroundColor: colors.grayScale[200], width: 66 },
  handle: { marginTop: 8 },

  container: { alignItems: "center", padding: 20 },
  cover: { width: "68%", height: 290, borderRadius: 20 },

  info: { width: "100%", gap: 12, marginTop: 16 },
  header: { flexDirection: "row", justifyContent: "space-between" },

  logo: { height: 30, width: "100%" },
  desc: { lineHeight: 22 },

  ratingRow: { flexDirection: "row", gap: 6, marginTop: 10 },

  counterRow: { flexDirection: "row", gap: 24, alignItems: "center" },
  counterBox: {
    flexDirection: "row",
    gap: 18,
    backgroundColor: colors.grayScale[50],
    padding: 10,
    borderRadius: 10,
  },
  counterBtn: {
    padding: 4,
    borderRadius: 999,
    backgroundColor: colors.grayScale[200],
  },
  primaryBtn: { backgroundColor: colors.primary[500] },

  actionRow: { flexDirection: "row", justifyContent: "space-between" },
  continueBtn: { paddingHorizontal: 26 },
  cartBtn: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 999,
    backgroundColor: colors.primary[50],
    justifyContent: "center",
  },
});

const BOOK_IMAGE =
  "https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg";

const LOGO =
  "https://mma.prnewswire.com/media/819539/GoDaddy_Logo.jpg?p=twitter";
