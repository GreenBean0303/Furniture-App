import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Separator from "@/components/Separator";
import GoogleLogin from "@/components/GoogleLogin";
import { styles } from "./styles";

export default function SignIn({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    // TODO: Add your authentication logic here
    // On successful login, navigate to MainApp
    navigation.navigate("MainApp");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onPress={handleBack} />
      <View style={styles.content}>
        <Input
          label="E-mail"
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          isPasswordVisible={isPasswordVisible}
          onEyePress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        <Button title="Sign In" variant="primary" onPress={handleSignIn} />
        <Separator text="Or sign in with" />
        <GoogleLogin />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
