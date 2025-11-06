import React from "react";
import { Image } from "react-native";
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
import Settings from "./screens/Settings/index";
import MyListings from "./screens/MyListings/index";
import CreateListing from "./screens/CreateListing/index";
import ProductDetails from "./screens/ProductDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

// Profile Stack Navigator
function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={Profile} />
      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen name="MyListings" component={MyListings} />
      <ProfileStack.Screen name="CreateListing" component={CreateListing} />
    </ProfileStack.Navigator>
  );
}

// Tab Navigator (shows after login)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: "#eee",
          height: 75,
          paddingBottom: 6,
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/home-fill.png")
                  : require("@/assets/images/bottom-home.png")
              }
              style={{
                width: 28,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/bottom-favourite-filled.png")
                  : require("@/assets/images/bottom-favourite.png")
              }
              style={{
                width: 28,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/bottom-profile-fill.png")
                  : require("@/assets/images/bottom-profile.png")
              }
              style={{
                width: 28,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
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
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Favourite" component={Favourites} />
    </Stack.Navigator>
  );
}
