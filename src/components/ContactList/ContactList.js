import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListElem from "./ContactListElem/ContactListItemContainer";
import styles from "./ContactList.module.css";

import { connect } from "react-redux";
import contactSelectors from "../../redux/contacts/contactsSelectors";

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts }) => {
  console.log("ContactList re-render");

  return (
    <TransitionGroup component="ul">
      {contacts &&
        contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames={itemMove}>
            <ContactListElem contact={contact} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  if (state.contacts) {
    return {
      contacts: contactSelectors.getFilteredContacts(state),
    };
  }
};

export default connect(mapStateToProps)(ContactList);
