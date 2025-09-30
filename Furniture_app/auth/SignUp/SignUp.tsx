import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

const SignUpScreen = ({ navigation, onBackPress }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation) {
      navigation.goBack();
    }
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
        <Checkbox
          checked={checked}
          onCheck={setChecked}
          title="I agree to the Terms of Service and Privacy Policy"
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
