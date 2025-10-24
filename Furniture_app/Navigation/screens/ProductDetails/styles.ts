import { StyleSheet, Dimensions } from "react-native";
import colors from "@/utils/colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backIcon: {
    width: 90,
    height: 90,
  },
  image: {
    width: width,
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -40,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.black,
    marginBottom: 8,
    lineHeight: 32,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.grey,
    lineHeight: 22,
  },
});
