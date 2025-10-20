import React from "react";
import { Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

interface ProductHomeItemProps {
  imageUrl: string;
  title: string;
  price: number;
  onPress: () => void;
}

const ProductHomeItem: React.FC<ProductHomeItemProps> = ({
  imageUrl,
  title,
  price,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
