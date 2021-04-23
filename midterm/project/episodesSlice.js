import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "./data";

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    values: data,
  },
  reducers: {
    // Reducer & actions
  },
});

const { 
  // Actions
 } = episodesSlice.actions;

export const store = configureStore({
  reducer: {
    episodes: episodesSlice.reducer,
  },
});

export { // Actions };
