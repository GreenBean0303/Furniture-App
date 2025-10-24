import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavouriteItem from "@/components/FavouriteItem";
import { products } from "@/data/products";
import Header from "@/components/Header";

interface Product {
  id: number;
  title: string;
  image: string;
  category: number;
  price: string;
}

interface FavouritesProps {
  navigation?: any;
}

const Favourites: React.FC<FavouritesProps> = ({ navigation }) => {
  const [favouriteProducts, setFavouriteProducts] = useState<Product[]>(
    products.slice(0, 3)
  );

  const handleRemoveFavourite = (id: number) => {
    setFavouriteProducts(
      favouriteProducts.filter((product) => product.id !== id)
    );
  };

  const renderFavouriteItem = ({ item }: { item: Product }) => {
    return (
      <FavouriteItem
        title={item.title}
        price={item.price}
        imageUrl={item.image}
        onPress={() => {
          if (navigation) {
            navigation.navigate("ProductDetails", { product: item });
          }
        }}
        onRemove={() => handleRemoveFavourite(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favourites" showBack={false} />
      <View style={styles.content}>
        {favouriteProducts.length > 0 ? (
          <FlatList
            data={favouriteProducts}
            renderItem={renderFavouriteItem}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favourites yet</Text>
            <Text style={styles.emptySubtext}>
              Start adding items to your favourites!
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
