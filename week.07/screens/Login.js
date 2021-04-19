import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { savePerson } from "../peopleSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const addNewPerson = () => {
    dispatch(
      savePerson({
        id: 10,
        name: "Randomić",
        email: "radnom@example.com",
        phoneNumber: "+387 66 999 999",
      })
    );
  };
  return (
    <View style={styles.container}>
      <b>Login Screen</b>
      <Button title={"Add new person"} onPress={() => addNewPerson()} />
    </View>
  );
};

export default Login;
