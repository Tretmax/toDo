
import { createStore } from 'redux';
import todosReducer from './todosReducer';
import statReducer from './statReducer'
import modalReducer from './modalReducer';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const allReducers = combineReducers({ todosReducer, statReducer, modalReducer })


const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, allReducers)

  const store = createStore(persistedReducer);
  export const persistor = persistStore(store)

export default store;