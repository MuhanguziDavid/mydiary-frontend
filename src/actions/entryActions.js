import 'react-toastify/dist/ReactToastify.css';
import {
  getEntriesSuccess,
  getEntriesError,
} from './actionCreators';
import axiosInstance from '../config/axiosInstance';

export const fetchEntries = () => dispatch => {
  axiosInstance
    .get('/api/v1/entries')
    .then((response) => {
      dispatch(getEntriesSuccess(response.data.entries));
    })
    .catch(() => {
      dispatch(getEntriesError(true));
    });
};

export default fetchEntries;
