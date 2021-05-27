import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import EpisodesList from "../components/EpisodesList";
import EpisodeFullDetail from "../components/EpisodeFullDetail";
import { setEpisodes } from "../store/episodesSlice";
import { getAll } from "../api/episodes";

const Stack = createStackNavigator();

const Episodes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const episodes = await getAll();
      dispatch(setEpisodes(episodes));
    };
    fetchData();
  }, []);
  const episodes = useSelector((state) => state.episodes.values);
  return (
    <Stack.Navigator>
      <Stack.Screen name="EpisodesList">
        {(props) => <EpisodesList {...props} episodes={episodes} />}
      </Stack.Screen>
      <Stack.Screen name="Details" component={EpisodeFullDetail} />
    </Stack.Navigator>
  );
};

export default Episodes;
