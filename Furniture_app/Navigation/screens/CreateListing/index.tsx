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
}

const CreateListing: React.FC<CreateListingProps> = ({ navigation }) => {
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
      selectionLimit: 0, // 0 = unlimited
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
    console.log("Submitted values:", values);
    console.log("Images:", images);

    // TODO: Upload to backend
    navigation?.goBack();
  };

  const handleBackPress = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add Listing" showBack onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Image Upload Section */}
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imagesContainer}>
            {/* Upload Button */}
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

            {/* Display Selected Images */}
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
                  <Image
                    source={require("@/assets/images/close.png")}
                    style={styles.deleteIconImage}
                  />
                </Pressable>
              </View>
            ))}
          </View>

          {/* Form Inputs */}
          <Input
            label="Title"
            placeholder="Listing Title"
            value={values.title}
            onChangeText={handleChange("title")}
          />

          <View style={{ marginBottom: 16 }}>
            <Text style={styles.inputLabel}>Price</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 16,
                color: "#111827",
              }}
              placeholder="Enter price"
              value={values.price}
              onChangeText={handleChange("price")}
              keyboardType="numeric"
            />
          </View>

          {/* Category Picker */}
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
              <Image
                source={require("@/assets/images/dropdown.png")}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Description Textarea */}
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

          {/* Submit Button */}
          <Button
            title="Submit"
            variant="primary"
            onPress={handleSubmit}
            style={styles.submitButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Category Selection Modal */}
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
                      <Image
                        source={require("@/assets/images/Check.png")}
                        style={styles.checkIcon}
                      />
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
