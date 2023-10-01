import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const editModalSlice = createSlice({
  name: "editModal",
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

export const { onClose, onOpen } = editModalSlice.actions;

export default editModalSlice.reducer;
