import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from "react-native";
import styles from "./styles";

export type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  onEyePress?: () => void;
  keyboardType?: TextInputProps["keyboardType"];
  multiline?: boolean;
  numberOfLines?: number;
  textAlignVertical?: "top" | "center" | "bottom";
  style?: StyleProp<ViewStyle>;
};

function Input({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword,
  isPasswordVisible,
  onEyePress,
  keyboardType = "default",
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = "center",
  style,
}: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          multiline && styles.textareaContainer,
          style,
        ]}
      >
        <TextInput
          style={[styles.input, multiline && styles.textareaInput]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
        />
        {isPassword && (
          <Pressable onPress={onEyePress} style={styles.eyeButton}>
            <Image
              source={
                isPasswordVisible
                  ? require("@/assets/images/eye.png")
                  : require("@/assets/images/eye_closed.png")
              }
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default Input;
