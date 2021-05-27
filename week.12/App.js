import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import EpisodesScreen from "./screens/Episodes";
import DownloadsScreen from "./screens/Downloads";
import { Provider } from "react-redux";
import { store } from "./store/episodesSlice";

const Bottom = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Bottom.Navigator>
          <Bottom.Screen name="Episodes" component={EpisodesScreen} />
          <Bottom.Screen name="Downloads" component={DownloadsScreen} />
        </Bottom.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
