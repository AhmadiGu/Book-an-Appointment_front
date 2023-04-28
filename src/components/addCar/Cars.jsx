import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCars from '../../redux/actions/carsActions';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <h3>Cars</h3>
      <ul>
        {cars.map((car) => (
          <p key={car.id}>
            <img src={car.photo} alt={car.name} width="350px" />
            <h4>{car.name}</h4>
            <p>{car.description}</p>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
