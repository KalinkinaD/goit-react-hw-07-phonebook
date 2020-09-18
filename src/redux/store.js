import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import contactsReducer from "./contacts/contactsReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [thunk],
});

export default store;
