import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Episode = ({ episode, hideDetails = false, onDetailsClicked }) => {
  const shortText = (text) => `${text.slice(3, 203)}...`;
  return (
    <View>
      <h2>{episode.name}</h2>
      <Text>{shortText(episode.summary)}</Text>
      {!hideDetails && (
        <Button title="Details" onPress={() => onDetailsClicked(episode.id)} />
      )}
    </View>
  );
};

export default Episode;
