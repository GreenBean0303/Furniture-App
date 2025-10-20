import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

type ProductHomeItemProps = {
  title: string;
  price: string;
  imageUrl: string;
  onPress: () => void;
};

const ProductHomeItem = ({
  title,
  price,
  imageUrl,
  onPress,
}: ProductHomeItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ProductHomeItem);
