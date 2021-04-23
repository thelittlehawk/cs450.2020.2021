import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./episodesSlice";

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>{/* Add Navigations & Screens */}</NavigationContainer>
  </Provider>
);

export default App;
