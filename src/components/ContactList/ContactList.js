import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListElem from "./ContactListElem/ContactListElem";
import styles from "./ContactList.module.css";

import { connect } from "react-redux";

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts }) => {
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
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
