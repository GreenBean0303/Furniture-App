import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#8A8A8A",
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
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
  eyeButton: {
    padding: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
