import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./peopleSlice";

import Login from "./screens/Login";
import People from "./screens/People";

const Bottom = createBottomTabNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Bottom.Navigator>
        <Bottom.Screen name="People" component={People} />
        <Bottom.Screen name="Login" component={Login} />
      </Bottom.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
