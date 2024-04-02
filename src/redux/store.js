import { configureStore, Tuple } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "user", "error", "loading"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer:  persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: () => new Tuple(thunk, logger),
});

export const persistor = persistStore(store);
