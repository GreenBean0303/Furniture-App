import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    height: 56,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    paddingVertical: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});

export default styles;
