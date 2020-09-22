import { connect } from "react-redux";
import ContactListElem from "./ContactListElem";
import ContactsOperations from "../../../redux/contacts/contactsOperations";
// import ContactsSelectors from "../../../redux/contacts/contactsSelectors";

// const mapState = (state, ownProps) => {
//   const contact = ContactsSelectors.getContactById(state, ownProps.id);

//   return {
//     ...contact,
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () =>
    dispatch(ContactsOperations.deleteContact(ownProps.contact.id)),
});

export default connect(null, mapDispatchToProps)(ContactListElem);

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   deleteContact: () =>
//     dispatch(ContactsOperations.deleteContact(ownProps.contact.id)),
// });
