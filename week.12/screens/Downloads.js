import React from "react";
import { Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { downloadAll, clearAll } from "../store/episodesSlice";
import Episode from "../components/Episode";

const Downloads = () => {
  const episodes = useSelector((state) => state.episodes.folder);
  const dispatch = useDispatch();
  return (
    <>
      {episodes.map((x) => (
        <Episode episode={x} hideDetails={true} />
      ))}
      <Button title="Download all" onPress={() => dispatch(downloadAll())} />
      <Button title="Clear all" onPress={() => dispatch(clearAll())} />
    </>
  );
};

export default Downloads;
