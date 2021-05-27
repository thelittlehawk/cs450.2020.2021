import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addEpisode, addToDownloads } from "../store/episodesSlice";
import * as EpisodesAPI from "../api/episodes";

const EpisodeFullDetail = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const episode = await EpisodesAPI.getById(route.params.episodeId);
      dispatch(addEpisode(episode));
    };
    if (!episode || !episode.name) fetchData();
  }, [episode]);

  const episode = useSelector((state) =>
    state.episodes.values.find((x) => x.id === route.params.episodeId)
  );
  const folder = useSelector((state) => state.episodes.folder);
  console.log(`EpisodesAPI`, EpisodesAPI);
  const handleAddToDownloads = async () => {
    try {
      const message = await EpisodesAPI.addToDownloads(episode.id);
      alert(message);
      dispatch(addToDownloads(episode));
    } catch (error) {
      alert(`Server is not responding, please try in few seconds.`);
    }
  };

  return (
    <View>
      <h2>{episode.name}</h2>
      <Text>{episode.summary}</Text>
      <br />
      <a href={episode.url}>Link</a>
      <br />
      <img src={episode.image.original} />
      {!folder.find((x) => x.id === route.params.episodeId) && (
        <Button title="Add To Downloads" onPress={handleAddToDownloads} />
      )}
      {folder.find((x) => x.id === route.params.episodeId) && (
        <Button title="Remove" onPress={() => console.log("Remove")} />
      )}
    </View>
  );
};

export default EpisodeFullDetail;
