import { createSelector } from "@reduxjs/toolkit";

const getContact = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// const getContactById = createSelector(
//   [(_, contactId) => contactId, getContact],
//   (contactId, contacts) => contacts.find((contact) => contact.id === contactId)
// );

export default {
  getContact,
  getLoading,
  getFilter,
  getFilteredContacts,
  // getContactById,
};
