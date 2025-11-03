import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import EditableBox from "@/components/EditableBox";
import Button from "@/components/Button";
import { styles } from "./styles";

interface SettingsProps {
  navigation?: any;
}

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Bruno Pham");
  const [email, setEmail] = useState("bruno203@gmail.com");

  const handleSave = () => {
    setEditing(false);
    // TODO: Save data to backend/storage
    console.log("Saved:", { name, email });
  };

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" showBack onBackPress={handleBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Personal Information Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity onPress={() => setEditing(!editing)}>
            <Image
              source={require("@/assets/images/edit.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <EditableBox
          label="Name"
          value={name}
          onChangeText={setName}
          editable={editing}
        />

        <EditableBox
          label="Email"
          value={email}
          onChangeText={setEmail}
          editable={editing}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {editing && (
          <Button
            title="Save"
            variant="primary"
            onPress={handleSave}
            style={styles.saveButton}
          />
        )}

        {/* Help Center Section */}
        <Text style={styles.sectionTitle}>Help Center</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => openLink("https://google.com")}
        >
          <Text style={styles.menuItemText}>FAQ</Text>
          <Image
            source={require("@/assets/images/arrow-right.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => openLink("https://google.com")}
        >
          <Text style={styles.menuItemText}>Contact Us</Text>
          <Image
            source={require("@/assets/images/arrow-right.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => openLink("https://google.com")}
        >
          <Text style={styles.menuItemText}>Privacy & Terms</Text>
          <Image
            source={require("@/assets/images/arrow-right.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
