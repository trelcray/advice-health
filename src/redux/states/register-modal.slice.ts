import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const registerModalSlice = createSlice({
  name: "registerModal",
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

export const { onClose, onOpen } = registerModalSlice.actions;

export default registerModalSlice.reducer;
