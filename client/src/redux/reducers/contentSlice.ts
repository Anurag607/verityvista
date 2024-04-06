import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    content: null,
    isContentOpen: false,
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    openContent: (state) => {
      state.isContentOpen = true;
    },
    closeContent: (state) => {
      state.isContentOpen = false;
    },
  },
});

export const { openContent, closeContent } = formSlice.actions;
export default formSlice.reducer;
