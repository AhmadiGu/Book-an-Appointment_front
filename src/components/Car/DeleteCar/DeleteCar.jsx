import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Nav/Header';
import { removeCarFromAPI } from '../../../redux/reducers/carsReducer';
import './delete.css';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeCarFromAPI(id));
    window.location.reload();
  };

  return (
    <div className="homepage">
      <div className="flex h-screen bg-white">
        <div className="hidden lg:flex lg:flex-shrink-0">
          <Header />
        </div>
        <div className="flex flex-col flex-1 min-w-0 mt-32 lg:mt-1">
          <div className="flex flex-col items-center">
            <h1 className="title">Remove car</h1>
          </div>
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.carImg} alt="delete" className="w-40 h-40 m-auto rounded-full car blob" />
              <div className="flex justify-end mr-4 space-x-1 font-serif text-lg">
                <button className="p-1 text-black bg-yellow-300 rounded-md" onClick={() => handleDelete(car.id)} type="button">
                  Remove
                </button>
                <div className="p-1 font-semibold text-white bg-green-500 rounded-md">{car.carModel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
