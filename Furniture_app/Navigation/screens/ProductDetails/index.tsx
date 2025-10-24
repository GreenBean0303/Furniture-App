import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const { height } = Dimensions.get("window");

const ProductDetails = ({ navigation, route }: any) => {
  console.log("Navigation:", navigation);
  console.log("Route:", route);
  console.log("Product data:", route.params?.product);

  const product = route.params?.product;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={handleBack}>
          <Image
            source={require("@/assets/images/back.png")}
            style={styles.backIcon}
          />
        </Pressable>

        {product?.image && (
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>
            {product?.description ||
              `${product?.title} is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.`}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
