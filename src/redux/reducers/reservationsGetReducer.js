const initialState = {
  reservations: null,
  error: null,
  status: 'idle',
};

const reservationsGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESERVATIONS_SUCCESS':
      return {
        ...state,
        reservations: action.payload,
        error: null,
        status: 'succeeded',

      };

    case 'GET_RESERVATIONS_ERROR':
      return {
        ...state,
        reservations: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsGetReducer;
