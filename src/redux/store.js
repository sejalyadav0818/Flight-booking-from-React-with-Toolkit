import { configureStore } from "@reduxjs/toolkit";
import FlightDataSlice from "./FlightDataSlice";
import { saveState } from "../redux/localstorage";

const store = configureStore({
  reducer: {
    FlightDataSlice: FlightDataSlice,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;