import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Separator from "@/components/Separator";
import GoogleLogin from "@/components/GoogleLogin";
import { styles } from "./styles";

export default function SignUp({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignUp = () => {
    // TODO: Add your authentication logic here
    // On successful signup, navigate to MainApp
    navigation.navigate("MainApp");
  };

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onPress={handleBack} />
      <View style={styles.content}>
        <Input
          label="Name"
          placeholder="John Doe"
          value={fullName}
          onChangeText={setFullName}
        />
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
        <Checkbox
          checked={checked}
          onCheck={setChecked}
          title="I agree with Terms & Privacy"
        />
        <Button title="Sign Up" variant="primary" onPress={handleSignUp} />
        <Separator text="Or sign up with" />
        <GoogleLogin />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.footerLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
