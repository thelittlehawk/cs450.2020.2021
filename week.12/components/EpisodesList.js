import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Episode from "./Episode";

const EpisodesList = ({ navigation, episodes }) => {
  const onEpisodeDetailClicked = (episodeId) =>
    navigation.navigate("Details", { episodeId });
  return (
    <ScrollView>
      {episodes.map((x) => (
        <Episode
          key={x.id}
          episode={x}
          onDetailsClicked={onEpisodeDetailClicked}
        />
      ))}
    </ScrollView>
  );
};

export default EpisodesList;
