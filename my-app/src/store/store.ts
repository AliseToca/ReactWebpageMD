import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
