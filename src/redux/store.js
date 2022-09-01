import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cityReducer from "./city-reducer";

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
