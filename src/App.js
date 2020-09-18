import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./Filter";
import Loader from "react-loader-spinner";
import { Logo } from "./components/Logo";
import contactsOperations from "./redux/contacts/contactsOperations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className="Wrapper">
        <Logo />
        <ContactForm />
        <h2 className="Title">Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && (
          <Loader type="Hearts" color="pink" height={80} width={80} />
        )}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
