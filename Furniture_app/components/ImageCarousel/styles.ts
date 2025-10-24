import { StyleSheet, Dimensions } from "react-native";
import colors from "@/utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  carouselImage: {
    width: width,
    height: 300,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    gap: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.lightGrey,
  },
  paginationDotActive: {
    backgroundColor: colors.primary,
    width: 24,
  },
});
