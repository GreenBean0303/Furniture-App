import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  listingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
  },
  listingInfo: {
    flex: 1,
    marginLeft: 16,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  listingPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF4444",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIconText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.grey,
    textAlign: "center",
    marginBottom: 24,
  },
  addButton: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
