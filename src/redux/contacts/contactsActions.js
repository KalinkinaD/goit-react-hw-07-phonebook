import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const deleteContactRequest = createAction("contact/deleteRequest");
const deleteContactSuccess = createAction("contacts/deleteSuccess");
const deleteContactError = createAction("contacts/deleteError");

const fetchContactRequest = createAction("contact/fetchRequest");
const fetchContactSuccess = createAction("contacts/fetchSuccess");
const fetchContactError = createAction("contacts/fetchError");

const setFilter = createAction("contact/filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  setFilter,
};
