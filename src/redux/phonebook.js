import { createSlice } from '@reduxjs/toolkit';
import {
  addUser,
  logInUser,
  logOutUser,
  fetchContacts,
  addContact,
  deleteContact,
} from './operations';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    removeError(state) {
      state.error = null;
    },
  },

  extraReducers: {
    [addUser.pending](state) {
      state.isLoading = true;
    },
    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },
    [addUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logInUser.pending](state) {
      state.isLoading = true;
    },
    [logInUser.fulfilled](state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },
    [logInUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logOutUser.pending](state) {
      state.isLoading = true;
    },
    [logOutUser.fulfilled](state) {
      state.isLoading = false;
      state.token = null;
      state.email = '';
    },
    [logOutUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(el => el.id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { removeError } = phonebookSlice.actions;
