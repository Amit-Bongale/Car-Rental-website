import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import adminReducer from './Admin/Adminslice'

const persistConfig = {
    key: 'root',
    storage,
};
  
const rootreducer = {
    admin : persistReducer(persistConfig, adminReducer),
}
    
  

const store = configureStore({
  reducer: rootreducer,
})

export const persistor = persistStore(store);

export default store