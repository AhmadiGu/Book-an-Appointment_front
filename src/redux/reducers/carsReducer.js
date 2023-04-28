const initialState = [];

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    default:
      return state;
  }
};

export default carsReducer;
