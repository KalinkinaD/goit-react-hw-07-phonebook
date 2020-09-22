import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import ContactActions from "./contactsActions";

const onAdd = (state, action) => {
  return [...state, action.payload];
};
const onDelete = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [ContactActions.fetchContactSuccess]: (_, action) => action.payload,
  [ContactActions.addContactSuccess]: onAdd,
  [ContactActions.deleteContactSuccess]: onDelete,
});

const filter = createReducer("", {
  [ContactActions.setFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [ContactActions.fetchContactRequest]: () => true,
  [ContactActions.fetchContactSuccess]: () => false,
  [ContactActions.fetchContactError]: () => false,
  [ContactActions.addContactRequest]: () => true,
  [ContactActions.addContactSuccess]: () => false,
  [ContactActions.addContactError]: () => false,
  [ContactActions.deleteContactRequest]: () => true,
  [ContactActions.deleteContactSuccess]: () => false,
  [ContactActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
