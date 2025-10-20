import React from "react";
import { Text, Image, Pressable, View } from "react-native";
import { styles } from "./styles";

interface CategoryBoxProps {
  title: string;
  imageUrl: string;
  onPress: () => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
