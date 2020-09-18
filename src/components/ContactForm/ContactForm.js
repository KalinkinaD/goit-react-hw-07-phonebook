import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import styles from "./ContactForm.module.css";

import NumberFormat from "react-number-format";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { items } = this.props.state.contacts;

    if (items && items.find((contact) => name === contact.name)) {
      alert("Contact with such name is already exist");
    } else {
      this.props.onSubmit(name, number);
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label htmlFor="nameInput">
          Name:
          <br />
          <input
            className="FormInput"
            type="text"
            name="name"
            value={name}
            placeholder="enter name..."
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="numberInput">
          Number:
          <br />
          <NumberFormat
            className="FormInput"
            format="(###) ###-####"
            mask=""
            name="number"
            value={number}
            placeholder="enter number..."
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!name.length || !number.length}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  onSubmit: contactsOperations.addContact,
})(ContactForm);
