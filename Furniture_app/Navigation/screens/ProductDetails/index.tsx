import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import { styles } from "./styles";

const { height } = Dimensions.get("window");

const ProductDetails = ({ navigation, route }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const product = route.params?.product;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContactSeller = async () => {
    const email = "agnes.lootsmann@voco.ee";
    const subject = `Inquiry about ${product?.title || "Product"}`;
    const body = `Hi, I'm interested in the ${product?.title}. Please provide more details.`;

    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      const canOpen = await Linking.canOpenURL(url);

      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          "Error",
          "No email app found. Please install an email app to contact the seller."
        );
      }
    } catch (error) {
      console.error("Error opening email:", error);
      Alert.alert("Error", "Could not open email app. Please try again later.");
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
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
