import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  // Selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    currentUser: ({ user }) => user,
    currentToken: ({ token }) => token,
  },
});

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { currentUser, currentToken } = authSlice.selectors;

export const { setUser, logout } = authSlice.actions;
