import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type SeparatorProps = {
  text: string;
};

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Separator;
