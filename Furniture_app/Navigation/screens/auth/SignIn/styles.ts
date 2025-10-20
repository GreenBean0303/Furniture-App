import { StyleSheet } from "react-native";
import colors from "@/utils/colors";
import Button from "@/components/Button";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  button: {
    marginVertical: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: colors.grey,
  },
  footerLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
});
