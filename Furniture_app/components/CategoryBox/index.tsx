import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CategoryBoxProps = {
  title: string;
  imageUrl: string;
  isSelected?: boolean;
  onPress: () => void;
};

const CategoryBox = ({
  title,
  imageUrl,
  isSelected = false,
  onPress,
}: CategoryBoxProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, isSelected && styles.selectedContainer]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(CategoryBox);
