import { StyleSheet, Dimensions } from "react-native";
import colors from "@/utils/colors";

const { width } = Dimensions.get("window");
const COLUMN_COUNT = 2;
const SPACING = 16;
const PADDING = 24;

const itemWidth = (width - PADDING * 2 - SPACING) / COLUMN_COUNT;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginRight: 8,
  },
  image: {
    width: itemWidth,
    height: itemWidth * 1.2,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: 4,
  },
});
