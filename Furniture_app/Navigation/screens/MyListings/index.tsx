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
  // Initialize with first 3 products as demo listings
  const [listings, setListings] = useState<Listing[]>(products.slice(0, 3));

  // Listen for new listings from CreateListing screen
  useEffect(() => {
    const unsubscribe = navigation?.addListener("focus", () => {
      // Check if there's a new listing passed back
      if (route?.params?.newListing) {
        const newListing = route.params.newListing;
        setListings((prevListings) => [newListing, ...prevListings]);

        // Clear the param so it doesn't add again
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

  const handleAddNew = () => {
    if (navigation) {
      // Pass callback to CreateListing
      navigation.navigate("CreateListing", {
        onListingCreated: (newListing: Listing) => {
          navigation.navigate("MyListings", { newListing });
        },
      });
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
        <View style={styles.deleteIconCircle}>
          <Text style={styles.deleteIconText}>×</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Listings" showBack onBackPress={handleBackPress} />

      {listings.length > 0 ? (
        <View style={styles.content}>
          <FlatList
            data={listings}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.listContainer}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
            <Text style={styles.addButtonText}>+ Add New Listing</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No listings yet</Text>
          <Text style={styles.emptySubtext}>Start adding items to sell!</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
            <Text style={styles.addButtonText}>+ Add New Listing</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyListings;
