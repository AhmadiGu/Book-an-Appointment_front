import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import fetchCars from '../../redux/actions/carsActions';
import createReservation from '../../redux/actions/reservationsActions';
import './ReservationNew.css';

const ReservationNew = () => {
  const [reservationData, setReservationData] = useState({
    date: '',
    city: '',
    duration: '',
    car_id: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const reservation = useSelector((state) => state.reservation);

  useEffect(() => {
    async function getCars() {
      await dispatch(fetchCars());
    }
    getCars();
  }, [dispatch]);

  useEffect(() => {
    dispatch(createReservation(reservationData));
  }, [dispatch, reservationData]);

  const handleCarChange = (e) => {
    setReservationData({ ...reservationData, car_id: e.target.value });
  };

  if (!cars) {
    return <p>Loading...</p>;
  }

  const handleDateChange = (e) => {
    setReservationData({ ...reservationData, date: e.target.value });
  };

  const handleCityChange = (e) => {
    setReservationData({ ...reservationData, city: e.target.value });
  };

  const handleDurationChange = (e) => {
    setReservationData({ ...reservationData, duration: e.target.value });
  };

  const handleSubmit = async (e) => {
    reservationData.car_id = reservationData.car_id.split(',');
    e.preventDefault();
    const reservation = {
      date: reservationData.date,
      item: reservationData.car_id[1],
      city: reservationData.city,
      duration: parseInt(reservationData.duration, 10),
      user_id: 11,
      car_id: reservationData.car_id[0],
    };

    dispatch(createReservation(reservation));
  };

  if (reservation.status === 'succeeded') {
    navigate('/reservedCars');
  }

  return (
    <>
      {cars.length === 0 ? (
        <h1 className="no-cars-page">No cars available to reserve!!</h1>
      ) : (
        <div className="forms-container">
          <div className="back-button-div">
            <button type="button" className="back-button" id="back-arrow" onClick={() => navigate(-1)}>
              <BsFillArrowLeftCircleFill />
            </button>
          </div>
          <div className="form-wrapper-container">
            <form onSubmit={handleSubmit} className="forms">
              <h2 className="headers-title">Reserve a car</h2>
              <div className="lines" />
              <p className="infos">
                There are 34 different versions of the Vesper. Today five series are in
                production: the classic manual transmission PX and the modern CVT
                transmission S, LX, GT, and GTS.
                We have showrooms all over the globe which some include
                test-riding facilities.
                If you wish to find out if a
                test-ride, please make reservation.
              </p>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={reservationData.user_id}
                  readOnly
                  className="form-input "
                  placeholder="Username"
                />
              </div>
              <div className="input-wrapper">
                <select
                  id="car"
                  name="car"
                  onChange={handleCarChange}
                  required
                  className="select-fom"
                >
                  {cars.map((car) => (
                    <option value={[car.id, car.name]} key={car.id}>
                      {car.name}
                      {' '}
                      {car.car_model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-wrapper">
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleDateChange}
                  className="form-input"
                  placeholder="Date"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleCityChange}
                  className="form-input"
                  placeholder="City"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  onChange={handleDurationChange}
                  required
                  className="form-input"
                  placeholder="Duration in days"
                />
              </div>
              <button type="submit" className="form-submit"><div className="text-res">Reserve</div></button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationNew;
