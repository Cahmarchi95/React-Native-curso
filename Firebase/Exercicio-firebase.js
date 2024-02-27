import React from "react";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
