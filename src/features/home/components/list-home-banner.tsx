import { colors } from "@/shared/themes";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { HomeBannerItem } from "./home-banner-item";

export function ListHomeBanner() {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const itemWidth = SCREEN_WIDTH - 20 * 2 + 20;

    const index = Math.round(offsetX / itemWidth);
    setActiveIndex(index);
  };

  const data = [1, 2, 3, 4];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={() => <HomeBannerItem />}
        horizontal
        pagingEnabled
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: 20,
            }}
          />
        )}
        snapToInterval={SCREEN_WIDTH - 40 + 20}
        onScroll={onScroll}
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
                activeIndex === idx ? colors.primary[500] : colors.primary[100],
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 6,
    alignItems: "center",
  },
});
