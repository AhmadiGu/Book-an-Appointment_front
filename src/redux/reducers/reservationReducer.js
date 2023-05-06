const initialState = {
  reservation: null,
  error: null,
  status: 'idle', // initial status is set to idle
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION_REQUEST':
      return {
        ...state,
        status: 'loading', // set status to loading when creating reservation request is made
      };
    case 'CREATE_RESERVATION_SUCCESS':
      return {
        ...state,
        reservation: action.payload,
        error: null,
        status: 'succeeded', // set status to succeeded when reservation is successfully created
      };
    case 'CREATE_RESERVATION_ERROR':
      return {
        ...state,
        reservation: null,
        error: action.payload,
        status: 'failed', // set status to failed when reservation creation fails
      };
    default:
      return state;
  }
};

export default reservationReducer;
