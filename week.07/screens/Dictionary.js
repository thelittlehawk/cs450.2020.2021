import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deletePerson } from "../peopleSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  personContainer: {
    margin: 5,
    borderWidth: 1,
  },
  personName: {
    fontSize: 30,
  },
});

const Dictionary = ({ navigation }) => {
  const people = useSelector((state) => state.people.values);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {people.map((person) => (
        <View key={person.id} style={styles.personContainer}>
          <Text style={styles.personName}>{person.name}</Text>
          <Button
            title={"DETAIL"}
            onPress={() =>
              navigation.navigate("Detail", { personId: person.id })
            }
          />
          <Button
            title={"DELETE"}
            color={"red"}
            onPress={() => dispatch(deletePerson({ personId: person.id }))}
          />
        </View>
      ))}
    </View>
  );
};

export default Dictionary;
