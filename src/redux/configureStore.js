/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/cars';
import createCarReducer from './car/car';

const rootReducer = combineReducers({
  cars: carsReducer,
  newcar: createCarReducer,
});

export default configureStore({
  reducer: rootReducer,
});
