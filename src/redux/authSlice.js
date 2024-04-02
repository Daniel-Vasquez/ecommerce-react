import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    name: "",
    email: "",
  },
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;

      state.token = token;
      state.user = user;
    },
    logout: () => {
      return initialState;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  }
});

export const { login, logout, error, loading } = authSlice.actions;
export default authSlice.reducer;