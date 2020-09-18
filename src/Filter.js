import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "./redux/contacts/contactsActions";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form className="FilterForm">
      <label htmlFor="filterInput">
        Find contacts by name
        <br />
        <input
          type="text"
          onChange={(e) => onChangeFilter(e.target.value)}
          value={value}
          name="filter"
          className="FilterInput"
          placeholder="start typing searching name..."
          // id="filterInput"
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onChangeFilter: contactsActions.setFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
