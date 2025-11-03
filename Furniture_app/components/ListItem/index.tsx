import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

interface ListItemProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, subtitle, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image
        source={require("@/assets/images/next.png")}
        style={styles.arrow}
      />
    </Pressable>
  );
};

export default ListItem;
