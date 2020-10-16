import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./MainNavigator";
import StartupScreen from "../screens/StartupScreen";
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <StartupScreen /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
