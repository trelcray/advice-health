import { configureStore } from "@reduxjs/toolkit";

import appointmentSlice from "./features/helpers/appointment.slice";
import reminderSlice from "./features/helpers/reminder.slice";
import editModalSlice from "./states/edit-modal.slice";
import registerModalSlice from "./states/register-modal.slice";
import reminderModalSlice from "./states/reminder-modal.slice";
import stateSlice from "./states/state.slice";
import viewModalSlice from "./states/view-modal.slice";

export const store = configureStore({
  reducer: {
    reminder: reminderSlice,
    appointment: appointmentSlice,
    registerModal: registerModalSlice,
    editModal: editModalSlice,
    viewModal: viewModalSlice,
    reminderModal: reminderModalSlice,
    states: stateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
