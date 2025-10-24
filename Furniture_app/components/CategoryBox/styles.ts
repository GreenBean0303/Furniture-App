import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  wrapper: {
    marginRight: 12,
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    padding: 12,
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
    fontSize: 14,
    color: colors.black,
    marginTop: 6,
    textAlign: "center",
    width: 70,
    marginBottom: 40,
  },
  selectedTitle: {
    color: colors.primary,
    fontWeight: "600",
  },
});
