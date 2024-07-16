import { combineReducers } from 'redux';
import {
  ADD_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  CANCEL_EDIT,
  SET_FILTER
} from './actions';

const initialState = {
  items: [],
  editingItem: null,
  filter: ''
};

const itemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM:
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const editingItemReducer = (state = initialState.editingItem, action) => {
  switch (action.type) {
    case EDIT_ITEM:
      return action.payload;
    case CANCEL_EDIT:
      return null;
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  editingItem: editingItemReducer,
  filter: filterReducer
});