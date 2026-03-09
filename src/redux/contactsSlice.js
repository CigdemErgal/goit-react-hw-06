import { createSlice } from '@reduxjs/toolkit';

// Handles add/remove operations for contacts list.

const contactsSlice = createSlice({ name: 'contacts', initialState: { items: [] }, reducers: {
    // Adds a new contact object to state.items.
    addContact: (state, action) => {
        state.items.push(action.payload);
    },
    // Removes a contact by id from state.items.
    deleteContact: (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
    },
},
});


// Selector to read contacts array from Redux state.
export const selectContacts = state => state.contacts.items;

// Action creators used with dispatch in components.
export const { addContact, deleteContact } = contactsSlice.actions;

// Reducer exported for store configuration.
export default contactsSlice.reducer;




    
