import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  reservation: reservationReducer,
  // Add more reducers here if needed
});

export default rootReducer;
