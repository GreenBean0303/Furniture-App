import React from "react";
import { View, Text, Image } from "react-native";
import Button from "@/components/Button";
import styles from "./styles";

interface SplashProps {
  onSignUpPress?: () => void;
  onSignInPress?: () => void;
}

export default function Splash({ onSignUpPress, onSignInPress }: SplashProps) {
  const handleSignUp = () => {
    console.log("Sign Up pressed");
    onSignUpPress?.();
  };

  const handleSignIn = () => {
    console.log("Sign In pressed");
    onSignInPress?.();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/splash_image.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} variant="primary" />

        <Button title="Sign In" onPress={handleSignIn} variant="secondary" />
      </View>
    </View>
  );
}
