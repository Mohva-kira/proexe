import { configureStore } from '@reduxjs/toolkit';

import usersReducer from "../store/reducers/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
