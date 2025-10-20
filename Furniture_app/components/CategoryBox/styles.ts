import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  selectedContainer: {
    backgroundColor: colors.primary,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 4,
    textAlign: "center",
  },
  selectedTitle: {
    color: colors.primary,
    fontWeight: "600",
  },
});
