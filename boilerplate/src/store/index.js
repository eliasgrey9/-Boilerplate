import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
// main redux store
const store = configureStore({
  reducer: {
    mainSlice: mainSlice.reducer,
  },
});

export default store;
