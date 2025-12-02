import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface UseAppHeaderProps {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  title?: string;
}

export const useAppHeader = ({
  title,
  rightIcon,
  leftIcon,
  style,
}: UseAppHeaderProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      ...(title !== undefined && { title }),
      ...(rightIcon && { headerRight: () => rightIcon }),
      ...(leftIcon && { headerLeft: () => leftIcon }),
      ...(style && { headerStyle: style }),
    });
  }, [navigation, rightIcon, leftIcon, style, title]);
};
