import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 8,

    height: 64,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    color: colors.blue,
    marginBottom: 4,
    fontWeight: "400",
  },
  input: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "500",
    padding: 0,
    outlineWidth: 0,
  },
  inputDisabled: {
    color: colors.grey,
  },
});
