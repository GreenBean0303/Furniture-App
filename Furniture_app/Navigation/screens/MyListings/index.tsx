import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { products } from "@/data/products";
import { styles } from "./styles";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: number;
  images?: string[];
}

interface MyListingsProps {
  navigation?: any;
}

const MyListings: React.FC<MyListingsProps> = ({ navigation }) => {
  // TODO: In a real app, you would filter products by userId
  // For now, we'll show the first 3 products as the user's listings
  const [myListings, setMyListings] = useState<Product[]>(products.slice(0, 3));

  const handleDelete = (id: number) => {
    // Remove the listing
    setMyListings(myListings.filter((item) => item.id !== id));
    // TODO: In a real app, send delete request to backend
  };

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.listingItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.listingImage}
        resizeMode="cover"
      />
      <View style={styles.listingInfo}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Image
          source={require("@/assets/images/trash.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Listings" showBack onBackPress={handleBackPress} />

      {myListings.length > 0 ? (
        <FlatList
          data={myListings}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No listings yet</Text>
          <Text style={styles.emptySubtext}>Start adding items to sell!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyListings;
