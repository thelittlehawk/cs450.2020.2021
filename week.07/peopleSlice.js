import { createSlice, configureStore } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    values: [
      {
        id: 1,
        name: "Ajla",
        email: "Ajla@ssst.edu.ba",
        phoneNumber: "+387 61 100 456",
      },
      {
        id: 2,
        name: "Edim",
        email: "Edim@ssst.edu.ba",
        phoneNumber: "+387 61 200 456",
      },
      {
        id: 3,
        name: "Rijad",
        email: "Rijad@ssst.edu.ba",
        phoneNumber: "+387 61 300 456",
      },
    ],
  },
  reducers: {
    savePerson: (state, action) => {
      state.values.push(action.payload);
    },
    deletePerson: (state, action) => {
      return {
        values: state.values.filter((p) => p.id !== action.payload.personId),
      };
    },
  },
});

const { savePerson, deletePerson } = peopleSlice.actions;

export const store = configureStore({
  reducer: {
    people: peopleSlice.reducer,
  },
});

export { savePerson, deletePerson };
