import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchParams: "",
    fixedData: [],
    matchingData: [],
  },
  reducers: {
    setSearchParams: (state, action: PayloadAction<string>) => {
      state.searchParams = action.payload;
      state.matchingData = state.fixedData.filter(
        (item: any) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearSearchParams: (state) => {
      state.searchParams = "";
      state.matchingData = state.fixedData;
    },
    updateData: (state, action: PayloadAction<any>) => {
      state.fixedData = action.payload;
      state.matchingData = action.payload;
    },
  },
});

export const { setSearchParams, clearSearchParams, updateData } =
  searchSlice.actions;

export default searchSlice.reducer;
