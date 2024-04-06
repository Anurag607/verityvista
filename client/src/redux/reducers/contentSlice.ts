import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
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

export const { openContent, closeContent } = contentSlice.actions;
export default contentSlice.reducer;
