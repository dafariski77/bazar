import {
  AppButton,
  AppPressable,
  AppText,
  AppTextInput,
  FormField,
  ScreenWrapper,
} from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function EditProfileScreen() {
  return (
    <ScreenWrapper contentStyle={styles.wrapper}>
      <View style={styles.topBannerContainer}>
        <View style={styles.banner} />
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/250px-Osamu_Dazai.jpg",
            }}
            style={styles.image}
          />
          <AppPressable>
            <AppText
              family={fontFamily.roboto.semibold}
              size={fontSize.lg}
              color={colors.primary[500]}
            >
              Change Picture
            </AppText>
          </AppPressable>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.fromGroup}>
          <FormField label="Name">
            <AppTextInput placeholder="Your Name" />
          </FormField>
          <FormField label="Email">
            <AppTextInput placeholder="Your Email" />
          </FormField>
          <FormField label="Phone Number">
            <AppTextInput
              placeholder="Your Email"
              leftIcon={
                <Feather
                  name="phone"
                  size={24}
                  color={colors.primary[500]}
                  style={{
                    marginVertical: -10,
                  }}
                />
              }
            />
          </FormField>
        </View>
        <AppButton>Save Changes</AppButton>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
  },
  topBannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 100,
    backgroundColor: colors.primary[50],
    width: "100%",
  },
  imageContainer: {
    position: "relative",
    bottom: 50,
    gap: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: -20,
    flex: 1,
    justifyContent: "space-between",
  },
  fromGroup: {
    gap: 20,
  },
});
