import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconSymbol } from "@/components/ui/icon-symbol";
import colors from "@/utils/colors";

// Auth screens
import Splash from "./screens/auth/Splash";
import SignUp from "./screens/auth/SignUp/SignUp";
import SignIn from "./screens/auth/SignIn/SignIn";

// Main app screens
import Home from "./screens/Home";
import Favourites from "./screens/Favourites/index";
import Profile from "./screens/Profile/index";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator (shows after login)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouritesTab"
        component={Favourites}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bookmark.fill" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main Stack Navigator (handles everything)
export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainApp" component={TabNavigator} />
    </Stack.Navigator>
  );
}
