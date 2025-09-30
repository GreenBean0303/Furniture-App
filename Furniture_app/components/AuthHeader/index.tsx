import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import React from "react";

export type Propstype = {
  title: string;
  onPress: any;
};

function AuthHeader({ title, onPress }: Propstype) {
  const handlePress = () => {
    console.log(`${title} button pressed`);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={handlePress} hitSlop={10}>
        <Image
          source={require("@/assets/images/back_icon.png")}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default AuthHeader;
