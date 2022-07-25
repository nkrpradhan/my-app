import userReducer from "../features/login/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userred: userReducer,
  },
});

export default store;
