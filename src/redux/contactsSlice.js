import { createSlice } from '@reduxjs/toolkit';

// Contact islemleri: ekleme ve silme

const contactsSlice = createSlice({ name: 'contacts', initialState: { items: [] }, reducers: {
//addcontact formdan gelen yeni contact objesini(payload) diziye ekler.
//deleteContact: gelen id ye göre o kisiyi listeden siler.

    addContact: (state, action) => {
        state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
    },
},
});


//selectContacts export edilen bir selector fonksiyonudur.
//  Bu fonksiyon, Redux store'daki contacts diliminden items dizisini seçer ve döndürür.
//  Bu sayede, bileşenler bu selector'ı kullanarak contacts listesini kolayca erişebilirler.
export const selectContacts = state => state.contacts.items;

//actions lari export edelim ki componentlerimizde kullanabilelim.
export const { addContact, deleteContact } = contactsSlice.actions;

//reducer i export edelim ki store da kullanabilelim.
export default contactsSlice.reducer;




    