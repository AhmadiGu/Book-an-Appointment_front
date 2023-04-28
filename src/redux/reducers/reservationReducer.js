const initialState = {
  reservation: null,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION_SUCCESS':
      return {
        ...state,
        reservation: action.payload,
        error: null,
      };
    case 'CREATE_RESERVATION_ERROR':
      return {
        ...state,
        reservation: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
