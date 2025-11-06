import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { styles } from "./styles";
import { products } from "@/data/products";

interface Listing {
  id: number;
  title: string;
  price: string;
  image: string;
  category?: number;
}

interface MyListingsProps {
  navigation?: any;
  route?: any;
}

const MyListings: React.FC<MyListingsProps> = ({ navigation, route }) => {
  const [listings, setListings] = useState<Listing[]>(products.slice(0, 3));
  useEffect(() => {
    const unsubscribe = navigation?.addListener("focus", () => {
      if (route?.params?.newListing) {
        const newListing = route.params.newListing;
        setListings((prevListings) => [newListing, ...prevListings]);
        navigation.setParams({ newListing: undefined });
      }
    });

    return unsubscribe;
  }, [navigation, route]);

  const handleDelete = (id: number) => {
    setListings(listings.filter((item) => item.id !== id));
  };

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const renderItem = ({ item }: { item: Listing }) => (
    <View style={styles.listingItem}>
      <Image source={{ uri: item.image }} style={styles.listingImage} />
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

      {listings.length > 0 ? (
        <FlatList
          data={listings}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No listings yet</Text>
          <Text style={styles.emptySubtext}>
            Go to Profile and click "Add New Listing" to create your first
            listing!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyListings;
