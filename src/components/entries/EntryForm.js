import React from 'react';
import PropTypes from 'prop-types';

const EntryForm = ({ entry }) => (
  <section className="mainbar">
    <div>
      <h3>{entry.title}</h3>
      <div>
        {entry.creation_time}
      </div>
    </div>
  </section>
);

EntryForm.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default EntryForm;
