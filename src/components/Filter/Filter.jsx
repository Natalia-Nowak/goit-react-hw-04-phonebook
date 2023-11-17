import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({ filter, contacts, changeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </div>
  );
}

Filter.propTypes = {
  props: PropTypes.string,
};
