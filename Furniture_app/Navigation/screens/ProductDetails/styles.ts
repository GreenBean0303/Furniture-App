import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

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
    top: 53,
    left: 32,
    zIndex: 10,
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  image: {
    width: "100%",
    height: 441,
  },
  content: {
    padding: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.textPrimary,
    marginBottom: 8,
    fontFamily: "Gelasio",
    lineHeight: 30,
    letterSpacing: 0,
  },
  price: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 16,
    fontFamily: "Nunito Sans",
    lineHeight: 41,
    letterSpacing: 0,
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    color: colors.textGrey,
    lineHeight: 22,
    fontFamily: "Nunito Sans",
    letterSpacing: 0,
    textAlign: "justify",
  },

  // Footer styles - matching the design
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  favoriteIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  favoriteIconContainerPressed: {
    backgroundColor: colors.lightGrey,
    opacity: 0.8,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  contactButton: {
    marginTop: 0,
    marginBottom: 0,
    width: 250,
    height: 60,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
  },
});
