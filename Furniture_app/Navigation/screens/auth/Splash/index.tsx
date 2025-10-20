import React from "react";
import { View, Text, Image } from "react-native";
import Button from "@/components/Button";
import styles from "./styles";

export default function Splash({ navigation }: any) {
  console.log("Splash component - navigation:", navigation);
  console.log("Navigation is:", typeof navigation);

  const handleSignUp = () => {
    console.log("Sign Up pressed");
    if (!navigation) {
      console.error("Navigation is undefined!");
      return;
    }
    navigation.navigate("SignUp");
  };

  const handleSignIn = () => {
    console.log("Sign In pressed");
    if (!navigation) {
      console.error("Navigation is undefined!");
      return;
    }
    navigation.navigate("SignIn");
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
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          variant="primary"
          style={{ marginTop: 0, marginBottom: 0 }}
        />
        <Button
          title="Sign In"
          onPress={handleSignIn}
          variant="secondary"
          style={{ marginTop: 0, marginBottom: 0 }}
        />
      </View>
    </View>
  );
}
