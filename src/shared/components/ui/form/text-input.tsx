import { colors, fontFamily, fontSize } from "@/shared/themes";
import React, { useRef } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

interface AppTextInputProps extends Omit<TextInputProps, "style"> {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextInputProps["style"];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function AppTextInput({
  containerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  ...props
}: AppTextInputProps) {
  const anim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    borderColor: anim.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", colors.primary[500]],
    }),
  };

  return (
    <Animated.View style={[styles.container, animatedStyle, containerStyle]}>
      <View style={styles.leftContent}>
        {leftIcon}
        <TextInput
          {...props}
          style={[styles.input, inputStyle]}
          placeholderTextColor={colors.grayScale[400]}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      {rightIcon}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayScale[50],
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.roboto.medium,
    color: colors.grayScale[900],
    fontSize: fontSize.lg,
  },
});
