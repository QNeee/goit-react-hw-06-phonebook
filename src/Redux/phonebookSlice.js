

import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
}

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.items.push(action.payload);
        },
        removeContactById: (state, action) => {
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
        },
        setFilterValue: (state, action) => {
            state.contacts.filter = action.payload;
        },
    },
})

export const { addContact, removeContactById, setFilterValue } = phonebookSlice.actions;

const persistConfig = {
    key: 'local-key',
    storage,
}
export const persistedPhonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer)
export const getFilter = state => state.phonebook.contacts.filter;
export const getContacts = state => state.phonebook.contacts.items;