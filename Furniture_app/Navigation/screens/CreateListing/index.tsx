import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibrary, Asset } from "react-native-image-picker";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { categories } from "@/data/categories";
import { styles } from "./styles";

interface CreateListingProps {
  navigation?: any;
  route?: any;
}

const CreateListing: React.FC<CreateListingProps> = ({ navigation, route }) => {
  const [images, setImages] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleImagePicker = async () => {
    setLoading(true);

    const result = await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 0,
      quality: 1,
    });

    setLoading(false);

    if (result.assets) {
      setImages([...images, ...result.assets]);
    }
  };

  const handleDeleteImage = (fileName: string | undefined) => {
    if (!fileName) return;
    setImages(images.filter((img) => img.fileName !== fileName));
  };

  const handleChange = (field: string) => (text: string) => {
    setValues({ ...values, [field]: text });
  };

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setValues({ ...values, category: String(category.id) });
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (!values.title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }
    if (!values.price.trim()) {
      Alert.alert("Error", "Please enter a price");
      return;
    }
    if (images.length === 0) {
      Alert.alert("Error", "Please add at least one image");
      return;
    }
    if (!values.category) {
      Alert.alert("Error", "Please select a category");
      return;
    }

    const newListing = {
      id: Date.now(),
      title: values.title,
      price: values.price.startsWith("$") ? values.price : `$ ${values.price}`,
      description: values.description,
      category: parseInt(values.category),
      image: images[0].uri,
      images: images.map((img) => img.uri),
    };

    console.log("New listing created:", newListing);

    navigation.navigate("MyListings", { newListing });
  };

  const handleBackPress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Create a new listing"
        showBack
        onBackPress={handleBackPress}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imagesContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleImagePicker}
            >
              {loading ? (
                <ActivityIndicator size="large" color="#4A5DFF" />
              ) : (
                <Text style={styles.uploadIcon}>+</Text>
              )}
            </TouchableOpacity>

            {images.map((image) => (
              <View key={image.fileName} style={styles.imageContainer}>
                <Image
                  source={{ uri: image.uri }}
                  style={styles.uploadedImage}
                />
                <Pressable
                  style={styles.deleteIcon}
                  hitSlop={20}
                  onPress={() => handleDeleteImage(image.fileName)}
                >
                  <View style={styles.deleteIconCircle}>
                    <Text style={styles.deleteIconText}>×</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>

          <Input
            label="Title"
            placeholder="Listing Title"
            value={values.title}
            onChangeText={handleChange("title")}
          />

          <Input
            label="Price"
            placeholder="Enter price (e.g., 50.00)"
            value={values.price}
            onChangeText={handleChange("price")}
            keyboardType="numeric"
          />

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Category</Text>
            <TouchableOpacity
              style={styles.pickerButton}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={[
                  styles.pickerText,
                  !selectedCategory && styles.pickerPlaceholder,
                ]}
              >
                {selectedCategory?.title || "Select category"}
              </Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Description</Text>
            <View style={styles.textareaWrapper}>
              <TextInput
                style={styles.textarea}
                placeholder="Tell us more..."
                value={values.description}
                onChangeText={handleChange("description")}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <Button
            title="Submit"
            variant="primary"
            onPress={handleSubmit}
            style={styles.submitButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal visible={modalVisible} transparent animationType="slide">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            <ScrollView>
              {categories
                .filter((cat) => cat.id !== undefined)
                .map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.optionItem,
                      selectedCategory?.id === category.id &&
                        styles.selectedOption,
                    ]}
                    onPress={() => handleCategorySelect(category)}
                  >
                    <Text style={styles.optionText}>{category.title}</Text>
                    {selectedCategory?.id === category.id && (
                      <Text style={styles.checkMark}>✓</Text>
                    )}
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default CreateListing;
