import { AppText } from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import moment from "moment";
import { StyleSheet, View } from "react-native";
import { OrderHistoryItem } from "./order-history-item";

export function OrderHistoryCard() {
  const data = [1, 2, 3];

  return (
    <View style={styles.container}>
      <AppText family={fontFamily.openSans.bold} size={fontSize.h5}>
        {moment().format("MMMM YYYY")}
      </AppText>
      <View style={styles.card}>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;

          return (
            <View
              key={index}
              style={[
                styles.itemContainer,
                {
                  borderBottomColor: colors.grayScale[200],
                  borderBottomWidth: isLast ? 0 : 1,
                },
              ]}
            >
              <OrderHistoryItem />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 14,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.grayScale[200],
    borderRadius: 14,
  },
  itemContainer: {
    padding: 16,
  },
});
