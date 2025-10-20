import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGrey,
  },
  title: {
    color: colors.grey,
    fontSize: 10,
    fontWeight: "400",
    marginTop: 6,
    textAlign: "center",
  },
});
