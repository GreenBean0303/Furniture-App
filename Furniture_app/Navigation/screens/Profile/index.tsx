import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
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

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" showLogout={true} onLogout={handleLogout} />

      <View style={styles.content}>
        <View style={styles.userInfo}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>BP</Text>
          </View>
          <Text style={styles.name}>Bruno Pham</Text>
          <Text style={styles.email}>bruno2031@gmail.com</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem} onPress={handleMyListings}>
            <Text style={styles.menuItemText}>My Listings</Text>
            <Text style={styles.menuItemSubtext}>2 listings</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
            <Text style={styles.menuItemText}>Settings</Text>
            <Text style={styles.menuItemSubtext}>Account, FAQ, Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
