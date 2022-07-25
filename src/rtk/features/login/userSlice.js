import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: false,
  user: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGlobalUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setGlobalUser } = userSlice.actions;
