import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxBase: {
    width: 16,
    height: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkIcon: {
    width: 14,
    height: 14,
  },
  title: {
    fontSize: 14,
    color: colors.textPrimary,
    flex: 1,
  },
  boldText: {
    fontWeight: "600",
  },
});

export default styles;
