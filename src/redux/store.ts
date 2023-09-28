import { configureStore } from "@reduxjs/toolkit";

import reminderSlice from "./features/helpers/reminder.slice";

export const store = configureStore({
  reducer: {
    reminder: reminderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
