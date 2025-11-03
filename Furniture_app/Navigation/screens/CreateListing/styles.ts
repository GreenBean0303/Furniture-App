import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 12,
  },

  // Image Upload Section
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  uploadButton: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.grey,
    borderStyle: "dashed",
  },
  uploadIcon: {
    fontSize: 40,
    color: colors.grey,
    fontWeight: "300",
  },
  imageContainer: {
    position: "relative",
    marginRight: 12,
    marginBottom: 12,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: colors.white,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  deleteIconImage: {
    width: 12,
    height: 12,
    tintColor: colors.textPrimary,
  },

  // Category Picker
  pickerContainer: {
    marginBottom: 24,
  },
  pickerLabel: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 8,
    fontWeight: "500",
  },
  pickerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.background,
    height: 56,
  },
  pickerText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  pickerPlaceholder: {
    color: colors.grey,
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    tintColor: colors.grey,
  },

  // Description Textarea
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 8,
    fontWeight: "500",
  },
  textareaWrapper: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textarea: {
    fontSize: 16,
    color: colors.textPrimary,
    minHeight: 100,
    textAlignVertical: "top",
  },

  // Submit Button
  submitButton: {
    marginTop: 8,
    marginBottom: 40,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  selectedOption: {
    backgroundColor: "#F0F2FF",
  },
  optionText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  checkIcon: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
  },
});
