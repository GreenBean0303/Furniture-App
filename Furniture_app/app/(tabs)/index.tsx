import { useState } from "react";
import Splash from "@/auth/Splash";
import SignUp from "@/auth/SignUp/SignUp";
import React from "react";
import SignIn from "@/auth/SignIn/SignIn";

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState("splash");

  if (currentScreen === "splash") {
    return <Splash onSignUpPress={() => setCurrentScreen("signup")} />;
  }

  if (currentScreen === "signup") {
    return <SignUp onBackPress={() => setCurrentScreen("splash")} />;
  }
  return <Splash onSignUpPress={() => setCurrentScreen("signup")} />;

  if (currentScreen === "signin") {
    return <SignIn onBackPress={() => setCurrentScreen("splash")} />;
  }
  return <Splash onSignInPress={() => setCurrentScreen("signin")} />;
}
