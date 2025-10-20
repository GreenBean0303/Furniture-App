import { Dimensions, StyleSheet } from "react-native";
import colors from "@/utils/colors";

const { width } = Dimensions.get("window");
console.log("width =>", width);

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 157,
    height: 200,
    borderRadius: 8,
  },
  title: {
    color: colors.textGrey,
  },
  price: {
    color: colors.black,
  },
});
