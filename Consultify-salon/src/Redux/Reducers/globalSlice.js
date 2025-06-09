import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = false;

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState: { value: initialStateValue },
  reducers: {
    startstopLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { startstopLoading } = globalSlice.actions;

export default globalSlice.reducer;
