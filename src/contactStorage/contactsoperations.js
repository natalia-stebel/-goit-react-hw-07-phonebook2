import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, addItems, deleteItems } from '../API/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getItems();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await addItems(name, number);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await deleteItems(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
