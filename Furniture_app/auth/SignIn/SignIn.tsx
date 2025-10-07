import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Separator from "@/components/Separator";
import GoogleLogin from "@/components/GoogleLogin";
import colors from "@/utils/colors";

const SignInScreen = ({ navigation, onBackPress }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onPress={handleBack} />

      <View style={styles.content}>
        <Input
          label="Email"
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

        <Button title="Sign In" variant="primary" />
        <Separator text="Don't have an account? Sign up" />
        <GoogleLogin />
      </View>
    </View>
  );
};

export default SignInScreen;
