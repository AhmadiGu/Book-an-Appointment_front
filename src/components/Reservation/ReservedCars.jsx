import React, { useState } from 'react';
import './ReservedCars.css';

const ReservedCars = () => {
  const [reservedCars] = useState([]);

  if (Array.from(reservedCars).length === 0) {
    return (
      <section className="py-14 fade-in">
        <div className="max-w-screen-xl mx-auto px-4  text-center md-px-8">
          <div className="title">
            <h3 className=" title-h3 text-gray-800 text-3xl font-semibold sm-text-4xl">
              YOUR CAR RESERVATION DETAILS
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

            <tr key="car.id">
              <td>car.car_name</td>
              <td>car.city</td>
              <td>car.date</td>
              <td>
                car.duration
                {' '}
                days
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservedCars;
