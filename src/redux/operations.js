import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://63b830196f4d5660c6cf21c0.mockapi.io/contacts');
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://63b830196f4d5660c6cf21c0.mockapi.io/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (args, thunkAPI) => {
  try {
    const response = await fetch(`https://63b830196f4d5660c6cf21c0.mockapi.io/contacts/${args}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
