import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";

export type CheckboxProps = {
  checked: boolean;
  onCheck: (value: boolean) => void;
  title?: string;
};

function Checkbox({ checked, onCheck, title }: CheckboxProps) {
  const handlePress = () => {
    onCheck(!checked);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.6}
    >
      <View style={styles.checkboxBase}>
        {checked && (
          <Image
            source={require("@/assets/images/Check.png")}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.title}>
        I agree to the <Text style={styles.boldText}>Terms of Service</Text> and{" "}
        <Text style={styles.boldText}>Privacy Policy</Text>
      </Text>
    </TouchableOpacity>
  );
}

export default Checkbox;
