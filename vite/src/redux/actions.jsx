export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const SET_FILTER = 'SET_FILTER';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const editItem = (id) => ({
  type: EDIT_ITEM,
  payload: id
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});