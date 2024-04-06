import { createSlice } from "@reduxjs/toolkit";

const voteSlice = createSlice({
  name: "vote",
  initialState: {
    votes: {} as any,
  },
  reducers: {
    setVote: (state, action) => {
      const data = action.payload;
      state.votes[data.id] = data.vote;
    },
  },
});

export const { setVote } = voteSlice.actions;
export default voteSlice.reducer;
