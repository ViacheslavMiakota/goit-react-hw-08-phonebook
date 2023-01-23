import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ContactsReducer } from './contactsSlice';
import { FiltersReducer } from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedContactReducer = persistReducer(persistConfig, ContactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: FiltersReducer,
  },
});

export const persistor = persistStore(store);
