import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  categoriesList: {
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  productsList: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});
