import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "./redux/contacts/contactsActions";
import contactsSelectors from "./redux/contacts/contactsSelectors";

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
    value: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = {
  onChangeFilter: contactsActions.setFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
