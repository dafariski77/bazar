import { OnboardingCarouselItem } from "@/features/onboarding";
import { colors, fontSize } from "@/shared/themes";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import {
  AppButton,
  AppPressable,
  AppText,
  ScreenWrapper,
} from "../shared/components/ui";

export default function Index() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [1, 2, 3];
  const LAST_INDEX = data.length - 1;

  const ITEM_WIDTH = SCREEN_WIDTH - 40 + 20;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setActiveIndex(index);
  };

  const handleContinue = () => {
    if (activeIndex === LAST_INDEX) {
      router.push("/register");
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1,
      animated: true,
    });
  };

  return (
    <ScreenWrapper hasHeader={false}>
      <View style={{ flex: 1, gap: 20 }}>
        <AppPressable onPress={() => router.push("/register")}>
          <AppText color={colors.primary[500]} size={fontSize.lg}>
            Skip
          </AppText>
        </AppPressable>

        <FlatList
          ref={flatListRef}
          disableIntervalMomentum
          data={data}
          bounces={false}
          renderItem={() => <OnboardingCarouselItem />}
          horizontal
          pagingEnabled
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          onScroll={onScroll}
          scrollEventThrottle={16}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          getItemLayout={(_, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
        />

        <View style={styles.dotContainer}>
          {data.map((_, idx) => (
            <View
              key={idx}
              style={{
                width: activeIndex === idx ? 12 : 8,
                height: activeIndex === idx ? 12 : 8,
                borderRadius: 999,
                backgroundColor:
                  activeIndex === idx
                    ? colors.primary[500]
                    : colors.primary[100],
              }}
            />
          ))}
        </View>

        <View style={{ gap: 10 }}>
          <AppButton style={{ borderRadius: 10 }} onPress={handleContinue}>
            {activeIndex === LAST_INDEX ? "Get Started" : "Continue"}
          </AppButton>

          <AppPressable
            onPress={() => router.push("/login")}
            style={{
              paddingVertical: 16,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.primary[50],
              borderRadius: 10,
            }}
          >
            <AppText size={fontSize.lg} color={colors.primary[500]}>
              Sign In
            </AppText>
          </AppPressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    alignItems: "center",
  },
});
