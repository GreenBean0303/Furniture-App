import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FavouritesProvider } from "../Navigation/context/FavouriteContext";
import React from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <FavouritesProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </FavouritesProvider>
  );
}
