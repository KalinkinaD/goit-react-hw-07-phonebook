import React from "react";
import styles from "./ContactListElem.module.css";
import { connect } from "react-redux";
import ContactsOperations from "../../../redux/contacts/contactsOperations";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactListElem = ({ contact: { name, number }, deleteContact }) => {
  const classes = useStyles();

  return (
    <li className={styles.contact}>
      <p className={styles.contactDescr}>
        {name}: {number}
      </p>
      <IconButton
        aria-label="delete"
        className={classes.margin}
        type="button"
        onClick={deleteContact}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () =>
    dispatch(ContactsOperations.deleteContact(ownProps.contact.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListElem);
