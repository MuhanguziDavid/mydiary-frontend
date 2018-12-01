import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import EntryList from './EntryList';
import { fetchEntries } from '../../actions/entryActions';
import { setLoginToTrue } from '../../actions/userActions';

export class Entries extends Component {
  componentDidMount() {
    const { fetchEntries } = this.props;
    fetchEntries();
    const { setLoginToTrue } = this.props;
    setLoginToTrue();
  }

  render() {
    const { entriesPayload } = this.props;
    return (
      <div>
        {entriesPayload
          ? (
            <React.Fragment>
              {Object.keys(entriesPayload).length > 0
                && <EntryList entries={entriesPayload} />
              }
            </React.Fragment>
          )
          : (
            <p>No entries available</p>
          )
        }
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({
  fetchEntries,
  setLoginToTrue,
}, dispatch);

const mapStateToProps = (state) => ({
  entriesPayload: state.entry.entriesPayload,
});

Entries.propTypes = {
  fetchEntries: PropTypes.func.isRequired,
  setLoginToTrue: PropTypes.func.isRequired,
  entriesPayload: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Entries);
