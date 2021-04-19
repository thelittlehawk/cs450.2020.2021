import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Detail = ({ route }) => {
  const people = useSelector((state) => state.people.values);
  const person = people.find((p) => p.id === route.params.personId);
  return (
    <View style={styles.container}>
      <Text>Name: {person.name}</Text>
      <Text>Email: {person.email}</Text>
      <Text>Phone number: {person.phoneNumber}</Text>
    </View>
  );
};

export default Detail;
