import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminderId: 0,
};

export const stateSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setReminderId: (state, action: PayloadAction<number>) => {
      state.reminderId = action.payload;
    },
  },
});

export const { setReminderId } = stateSlice.actions;

export default stateSlice.reducer;
