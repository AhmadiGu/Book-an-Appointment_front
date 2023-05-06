import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reservationReducer from './reservationReducer';
import reservationsGetReducer from './reservationsGetReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  reservation: reservationReducer,
  reservations: reservationsGetReducer,
  // Add more reducers here if needed
});

export default rootReducer;
