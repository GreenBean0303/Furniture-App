import { StyleSheet, Dimensions } from "react-native";
import colors from "@/utils/colors";

const { width } = Dimensions.get("window");
const itemWidth = (width - 48) / 2;

export const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 8,
    margin: 8,
  },
  image: {
    width: "100%",
    height: itemWidth - 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textPrimary,
    marginBottom: 4,
    height: 36,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.black,
  },
});
