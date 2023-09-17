import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    removeContact(state, action) {
      const index = state.users.findIndex(
        contact => contact.id === action.payload
      );
      state.users.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
