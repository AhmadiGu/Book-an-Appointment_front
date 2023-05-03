/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import reservationReducer from './reservations/reservation.js';
import createCarReducer from './car/car';
import { authReducer } from './auth/auth';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCarReducer,
  auth: authReducer,
  reservations: reservationReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
