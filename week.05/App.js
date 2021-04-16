import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useDispatch } from "react-redux";
import { store, saveName } from "./namesSlice";

const Stack = createStackNavigator();

const MainScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>This is main!</Text>
      <Button
        title="Click me!"
        onPress={() => dispatch(saveName("New Random name..."))}
      />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Prvi"}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
