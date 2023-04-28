import axios from 'axios';

const createReservation = (reservationData) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/reservations', reservationData)
    .then((response) => {
      dispatch({
        type: 'CREATE_RESERVATION_SUCCESS',
        payload: response.data.reservation,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'CREATE_RESERVATION_ERROR',
        payload: error.response.data.errors,
      });
    });
};

export default createReservation;
