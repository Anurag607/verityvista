import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authInstance: null,
    role: null,
  },
  reducers: {
    setAuthInstance: (state: any, action: PayloadAction<any>) => {
      state.authInstance = action.payload;
    },
    destroyAuthInstance: (state: any) => {
      state.authInstance = null;
    },
    setRole: (state: any, action: PayloadAction<any>) => {
      state.role = action.payload;
    },
    destroyRole: (state: any) => {
      state.role = null;
    },
  },
});

export const { setAuthInstance, destroyAuthInstance, setRole, destroyRole } =
  authSlice.actions;
export default authSlice.reducer;
