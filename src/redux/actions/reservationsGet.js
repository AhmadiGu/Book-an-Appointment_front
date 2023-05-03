import axios from 'axios';

const getReservations = () => (dispatch) => {
  axios
    .get('http://localhost:3000/api/v1/reservations')
    .then((response) => response.data)
    .then((data) => {
      dispatch({
        type: 'GET_RESERVATIONS_SUCCESS',
        payload: data.reservations,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'GET_RESERVATIONS_ERROR',
        payload: error.data.errors,
      });
    });
};

export default getReservations;
