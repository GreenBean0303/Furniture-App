import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 18,
    height: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
    color: colors.textSecondary,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: colors.textSecondary,
  },
});

export default styles;
