import React from 'react';
import PropTypes from 'prop-types';
import EntryForm from './EntryForm';

const EntryList = ({ entries }) => (
  <div>
    {entries.map(entry => (
      <EntryForm entry={entry} />
    ))}
  </div>
);

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default EntryList;
