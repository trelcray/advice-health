import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const reminderModalSlice = createSlice({
  name: "reminderModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onClose, onOpen } = reminderModalSlice.actions;

export default reminderModalSlice.reducer;
