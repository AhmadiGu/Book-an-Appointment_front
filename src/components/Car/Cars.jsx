import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchCars from '../../redux/actions/carsActions';
import './Cars.css';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="cars-container">
      <h3 className="cars-heading">Cars</h3>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <img src={car.photo} alt={car.name} className="car-img" />
            <h4 className="car-name">{car.name}</h4>
            <p className="car-description">{car.description}</p>
            <Link to={`/cars/${car.id}`} className="car-link">
              details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
