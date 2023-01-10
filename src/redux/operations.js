import { createAsyncThunk } from '@reduxjs/toolkit';

export const addUser = createAsyncThunk('signUp/addUser', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://connections-api.herokuapp.com/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return await data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logInUser = createAsyncThunk('logIn/User', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://connections-api.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return await data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutUser = createAsyncThunk('logOut/User', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://connections-api.herokuapp.com/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: args,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return await data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchContacts = createAsyncThunk('contacts/fetch', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://connections-api.herokuapp.com/contacts', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: args,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (args, thunkAPI) => {
  try {
    const response = await fetch('https://connections-api.herokuapp.com/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: args.token,
      },
      body: JSON.stringify(args.values),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return await data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (args, thunkAPI) => {
  try {
    const response = await fetch(`https://connections-api.herokuapp.com/contacts/${args.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: args.token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return await data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
