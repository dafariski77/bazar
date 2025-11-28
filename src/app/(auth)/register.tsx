import {
  AppButton,
  AppPasswordInput,
  AppPressable,
  AppText,
  AppTextInput,
  FormField,
  ScreenWrapper,
} from "@/shared/components/ui";
import { colors, fontFamily, fontSize } from "@/shared/themes";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          gap: 20,
        }}
      >
        <View style={styles.title}>
          <AppText size={fontSize.h3} family={fontFamily.openSans.bold}>
            Sign Up
          </AppText>
          <AppText
            size={fontSize.lg}
            family={fontFamily.roboto.regular}
            color={colors.grayScale[500]}
          >
            Create account and choose favorite menu
          </AppText>
        </View>
        <View style={styles.formContainer}>
          <FormField label="Name">
            <AppTextInput placeholder="Your Name" />
          </FormField>
          <FormField label="Email">
            <AppTextInput placeholder="Your Email" />
          </FormField>
          <FormField label="Password">
            <AppPasswordInput placeholder="Your Password" />
          </FormField>
        </View>

        <AppButton onPress={() => router.push("/home")}>Register</AppButton>

        <View style={styles.authInfo}>
          <AppText color={colors.grayScale[500]} size={fontSize.lg}>
            Have an account?
          </AppText>
          <AppPressable onPress={() => router.replace("/(auth)/login")}>
            <AppText color={colors.primary[500]} size={fontSize.lg}>
              Sign In
            </AppText>
          </AppPressable>
        </View>
      </View>
      <View style={styles.termsInfo}>
        <AppText color={colors.grayScale[500]}>
          By clicking Register, you agree to our
        </AppText>
        <AppPressable onPress={() => router.replace("/(auth)/login")}>
          <AppText color={colors.primary[500]}>Terms and Data Policy.</AppText>
        </AppPressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    gap: 8,
  },
  formContainer: {
    gap: 20,
  },
  authInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  termsInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
