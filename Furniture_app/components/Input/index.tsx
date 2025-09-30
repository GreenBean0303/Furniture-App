import React from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import styles from "./styles";

export type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  onEyePress?: () => void;
};

function Input({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword,
  isPasswordVisible,
  onEyePress,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
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
