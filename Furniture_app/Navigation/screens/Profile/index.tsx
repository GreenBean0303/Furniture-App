import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem/index";
import Button from "@/components/Button";
import { styles } from "./styles";

interface ProfileProps {
  navigation?: any;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const handleLogout = () => {
    console.log("Logout pressed");
    if (navigation) {
      navigation.navigate("Splash");
    }
  };

  const handleMyListings = () => {
    console.log("My Listings pressed");
    if (navigation) {
      navigation.navigate("MyListings");
    }
  };

  const handleSettings = () => {
    console.log("Settings pressed");
    if (navigation) {
      navigation.navigate("Settings");
    }
  };

  const handleAddNewListing = () => {
    console.log("Add New Listing pressed");
    if (navigation) {
      navigation.navigate("CreateListing");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" showLogout={true} onLogout={handleLogout} />

      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.email}>user@email.com</Text>
        </View>

        <View style={styles.container}>
          <ListItem
            title="My Listings"
            subtitle="You have 2 listings"
            onPress={handleMyListings}
          />
          <ListItem
            title="Settings"
            subtitle="Account, FAQ, Contact"
            onPress={handleSettings}
          />
        </View>

        <Button
          title="Add New Listing"
          variant="primary"
          onPress={handleAddNewListing}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
