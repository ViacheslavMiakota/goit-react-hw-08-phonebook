import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { ContactsReducer } from 'redux/contacts/contactsSlice';
import { AuthReducer } from 'redux/auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    auth: persistReducer(authPersistConfig, AuthReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
