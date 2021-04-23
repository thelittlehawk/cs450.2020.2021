import React from "react";
import { StyleSheet, View, Button, Text, Image } from "react-native";
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
  let Image_Http_URL = {
    uri:
      "https://freepngimg.com/thumb/agriculture/2-2-agriculture-png-picture.png",
  };
  return (
    <View style={styles.container}>
      <Image
        source={Image_Http_URL}
        style={{ height: 200, resizeMode: "stretch", margin: 5 }}
      />

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
