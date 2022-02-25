import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface UserState {
  username: string;
}

// Define the initial state using that type
const initialState: UserState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.username = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.username;

export default userSlice.reducer;
