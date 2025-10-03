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
    paddingTop: 40,
  },
  button: {
    marginVertical: 20,
  },
});
