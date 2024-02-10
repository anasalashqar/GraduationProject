import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    notification:
      null /*id: null,temp:null, heartbeats: null, name: "", lat: null, lng: null */,
  },
  reducers: {
    display(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: { dataSlice: dataSlice.reducer },
});

export const datsAction = dataSlice.actions;

export default store;
