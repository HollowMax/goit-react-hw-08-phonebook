import { createSlice } from '@reduxjs/toolkit';
import { addUser, logInUser, logOutUser } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    token: null,
  },
  extraReducers: {
    [addUser.fulfilled](state, action) {
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },

    [logInUser.fulfilled](state, action) {
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },

    [logOutUser.fulfilled](state) {
      state.token = null;
      state.email = '';
    },
  },
});

export const userReducer = userSlice.reducer;
