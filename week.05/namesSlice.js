import { createSlice, configureStore } from "@reduxjs/toolkit";

const namesSlice = createSlice({
  name: "names",
  initialState: {
    values: ["Ajla", "Edim", "Rijad"],
  },
  reducers: {
    saveName: (state, action) => console.log(action),
  },
});

const { saveName } = namesSlice.actions;

export const store = configureStore({
  reducer: {
    names: namesSlice.reducer,
  },
});

export { saveName };
