import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import { styles } from "./styles";

const { height } = Dimensions.get("window");

const ProductDetails = ({ navigation, route }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  console.log("Navigation:", navigation);
  console.log("Route:", route);
  console.log("Product data:", route.params?.product);

  const product = route.params?.product;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContactSeller = () => {
    console.log("Contact Seller pressed");
    // Add r contact seller logic
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log("Favorite toggled:", !isFavorite);
    // Add favorite logic
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <Pressable style={styles.backButton} onPress={handleBack}>
          <Image
            source={require("@/assets/images/back.png")}
            style={styles.backIcon}
          />
        </Pressable>

        {product?.image && (
          <>
            {product.images && product.images.length > 1 ? (
              <ImageCarousel images={product.images} />
            ) : (
              <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
          </>
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>
            {product?.description ||
              `${product?.title} is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.`}
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.favoriteIconContainer,
            pressed && styles.favoriteIconContainerPressed,
          ]}
          onPress={handleToggleFavorite}
          hitSlop={10}
        >
          <Image
            source={require("@/assets/images/favourite-icon.png")}
            style={styles.favoriteIcon}
            resizeMode="contain"
          />
        </Pressable>

        <View style={styles.buttonContainer}>
          <Button
            title="Contact Seller"
            variant="primary"
            onPress={handleContactSeller}
            style={styles.contactButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
