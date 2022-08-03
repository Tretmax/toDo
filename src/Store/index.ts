

import { createStore } from 'redux';
import todosReducer from './todosReducer';
import statReducer from './statReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers ({todosReducer, statReducer})

const store = createStore(allReducers);

export default store;