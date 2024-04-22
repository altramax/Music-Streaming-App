import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rootReducer from "./RootReducer";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["userDetails"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
