import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dictionary from "../screens/Dictionary";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

const PeopleScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dictionary" component={Dictionary} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

export default PeopleScreen;
