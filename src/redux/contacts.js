import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;
