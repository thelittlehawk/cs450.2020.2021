import { createSlice, configureStore } from "@reduxjs/toolkit";

const episodesSlice = createSlice({
  name: "episodes",

  initialState: {
    values: [],
    folder: [],
  },

  reducers: {
    addToDownloads: (state, action) => {
      state.folder.push(action.payload);
    },
    downloadAll: (state, action) => {
      state.folder = [];
    },
    clearAll: (state, action) => {
      state.folder = [];
    },
    setEpisodes: (state, action) => {
      state.values = action.payload;
    },
    addEpisode: (state, action) => {
      state.values.push(action.payload);
    },
  },
});

const { addToDownloads, downloadAll, clearAll, setEpisodes } =
  episodesSlice.actions;

export const store = configureStore({
  reducer: {
    episodes: episodesSlice.reducer,
  },
});

export { addToDownloads, downloadAll, clearAll, setEpisodes };
