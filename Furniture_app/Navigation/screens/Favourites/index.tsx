import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import FavouriteItem from "@/components/FavouriteItem";
import { products } from "@/data/products";
import Header from "@/components/Header";
import { useFavourites } from "../../context/FavouriteContext";

interface Product {
  id: number;
  title: string;
  image: string;
  category: number;
  price: string;
}

interface FavouritesProps {
  navigation: any;
  route: any;
}

const Favourites: React.FC<FavouritesProps> = ({ navigation, route }) => {
  const { favourites, removeFavourite } = useFavourites();

  const handleAddFavourite = (product: Product) => {
    setFavouriteProducts((prev) => {
      const exists = prev.some((p: { id: number }) => p.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFavourite = (id: number) => {
    setFavouriteProducts((prev) =>
      prev.filter((p: { id: number }) => p.id !== id)
    );
  };

  useEffect(() => {
    if (route.params?.newFavourite) {
      handleAddFavourite(route.params.newFavourite);
    }
  }, [route.params?.newFavourite]);

  const renderFavouriteItem = ({ item }: { item: any }) => (
    <FavouriteItem
      title={item.title}
      price={item.price}
      imageUrl={item.image}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      onRemove={() => removeFavourite(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favourites" showBack={false} />
      <View style={styles.content}>
        {favourites.length > 0 ? (
          <FlatList
            data={favourites}
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
function setFavouriteProducts(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}
