import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "@/utils/colors";
import Splash from "./screens/auth/Splash";
import SignUp from "./screens/auth/SignUp/SignUp";
import SignIn from "./screens/auth/SignIn/SignIn";
import Home from "./screens/Home";
import Favourites from "./screens/Favourites/index";
import Profile from "./screens/Profile/index";
import Settings from "./screens/Settings/index";
import MyListings from "./screens/MyListings/index";
import CreateListing from "./screens/CreateListing/index";
import ProductDetails from "./screens/ProductDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MyListings" component={MyListings} />
      <Stack.Screen name="CreateListing" component={CreateListing} />
    </Stack.Navigator>
  );
}

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
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/home-fill.png")
                  : require("@/assets/images/bottom-home.png")
              }
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouritesTab"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/bottom-favourite-filled.png")
                  : require("@/assets/images/bottom-favourite.png")
              }
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/bottom-profile-fill.png")
                  : require("@/assets/images/bottom-profile.png")
              }
              style={{ width: 28, height: 28, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainApp" component={TabNavigator} />
    </Stack.Navigator>
  );
}
