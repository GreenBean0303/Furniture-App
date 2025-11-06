import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8E8E93",
    marginTop: 16,
    marginBottom: 8,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: "#8E8E93",
  },
  saveButton: {
    marginTop: 16,
    marginBottom: 8,
  },
  // Help Center - Separate cards for each item
  menuItem: {
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "400",
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#C7C7CC",
  },
  backButton: {
    position: "absolute",
    top: 53,
    left: 32,
    zIndex: 10,
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 120,
    height: 120,
  },
});
