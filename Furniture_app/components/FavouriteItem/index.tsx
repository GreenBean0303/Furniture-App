import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";

type FavouriteItemProps = {
  title: string;
  price: string;
  imageUrl: string;
  onPress: () => void;
  onRemove: () => void;
};

const FavouriteItem = ({
  title,
  price,
  imageUrl,
  onPress,
  onRemove,
}: FavouriteItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Pressable onPress={onRemove} hitSlop={10}>
        <Image
          source={require("@/assets/images/close.png")}
          style={styles.closeIcon}
        />
      </Pressable>
    </TouchableOpacity>
  );
};

export default React.memo(FavouriteItem);
