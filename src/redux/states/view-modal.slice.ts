import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const viewModalSlice = createSlice({
  name: "viewModal",
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

export const { onClose, onOpen } = viewModalSlice.actions;

export default viewModalSlice.reducer;
