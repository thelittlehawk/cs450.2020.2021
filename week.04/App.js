import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  console.log("NAVIGATON PROP", navigation);
  return (
    <View style={styles.container}>
      <Text>This is main!</Text>
      <Button title="Click me!" onPress={() => navigation.navigate("Drugi")} />
    </View>
  );
};

const DrugiScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is 2nd screen!</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Exp = () => {
  return (
    <Stack.Navigator initialRouteName={"Prvi"}>
      <Stack.Screen name="Drugi" component={() => <b>Drugi</b>} />
      <Stack.Screen
        name="Prvi"
        component={({ navigation }) => (
          <b>
            Prvi{" "}
            <Button
              title="Next =>"
              onPress={() => navigation.navigate("Drugi")}
            />
          </b>
        )}
        options={{ title: "This is main title!" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Drugi" component={DrugiScreen} />
        <Tab.Screen name="Eksperiment" component={Exp} />
      </Tab.Navigator>
    </NavigationContainer>
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
