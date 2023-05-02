import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getReservations from '../../redux/actions/reservationsGet';
import './ReservedCars.css';

const ReservedCars = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const data = reservations.reservations;
  const [reservedCars, setReservedCars] = useState([]);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = async () => {
      const dataReserve = data.filter((item) => item.user_id === 10);
      setReservedCars(dataReserve);
    };
    filteredData();
  }, [reservations, data]);

  if (Array.from(reservedCars).length === 0) {
    return (
      <section className="py-14 fade-in">
        <div className="max-w-screen-xl mx-auto px-4  text-center md-px-8">
          <div className="title">
            <h3 className=" title-h3 text-gray-800 text-3xl font-semibold sm-text-4xl">
              YOUR CAR RESERVATION DETAILS WAIT PLEACE SOME MIN
            </h3>
          </div>
          <div className="mt-24 items-center empty-dev">
            <div className="mb-5 empty" />
            <h2 className="empty-h2"><i>No reservations saved. Please make a reservation to see it here</i></h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="reserved-cars">
      <div className="card-container">
        <header>YOUR CAR RESERVATION DETAILS</header>
        <table>
          <thead>
            <tr>
              <th>Car</th>
              <th>City</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>

          <tbody>

            {reservedCars.map((car) => (
              <tr key={car.id}>
                <td>{car.item}</td>
                <td>{car.city}</td>
                <td>{car.date}</td>
                <td>
                  {car.duration}
                  {' '}
                  days
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservedCars;
