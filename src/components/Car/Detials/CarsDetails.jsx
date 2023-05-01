import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import './carsDetails.css';
import ReservationAdd from '../../Reservation/ReservationAdd';

const CarDetails = () => {
  const navigate = useNavigate();

  const [showReservationAdd, setShowReservationAdd] = useState(false);
  const handleReservationClick = () => {
    setShowReservationAdd(true);
  };

  const cars = [{
    name: 'Toyota Camry', photo: '../../../images/reserave/reserve_car.jpg', description: 'Sedan car', price_per_day: 150, car_model: 'Camry 2022', user_id: 1,
  }];

  const carss = cars;

  if (!cars) {
    return (
      <div className="empty-message">
        <h2 className="title mb-5">Sorry</h2>
        <div className="mb-5 mt-5 empty" />
        <p className="title-h3 mt-5">
          There is no car in Garage
        </p>

      </div>
    );
  }

  return (
    <>
      {carss.map((carss) => (
        <div key={carss.id} className="details-con p-5 ">
          <div className="details-img">
            <img
              src={`${carss?.photo}`}
              alt={carss?.name}
              className="car-image w-100"
            />
          </div>
          <div className="details-info">
            <div className="details-text">
              <h1 className="text-name">
                {carss?.name}
              </h1>
              <p className="text-dec">
                {carss?.description}
              </p>
            </div>
            <div className="other">
              <div className="other-cont p-3">
                <div className=" other-title ">
                  <h3 className="other-h">Other Details</h3>
                </div>
                <ul className=" other-ul">
                  <li className="other-li ">
                    <div>
                      <span className="pr-10">Model</span>
                      <span className="text-right">
                        {carss?.car_model}
                      </span>
                    </div>
                  </li>

                  <li className="">
                    <div>
                      <span className="pr-10">Rent per day</span>
                      <span className="text-right">
                        $
                        {' '}
                        {carss?.price_per_day}
                      </span>
                    </div>
                  </li>

                  <li className="">
                    <div>
                      <span className="pr-10">Owner</span>
                      <span className="text-right">
                        {carss?.user_id}
                      </span>
                    </div>
                  </li>

                </ul>
              </div>
              <p className=" other-p ">
                DISCOVER MORE MODELS
                {' '}
                <AiOutlineRight className="text-warning" />
              </p>
              <div className="mt-5 other-b">
                <button
                  type="button"
                  className="btn-res"
                  onClick={handleReservationClick}
                >
                  <div className="btn-icon">
                    <SlSettings />
                    <span>Reserve</span>
                    <BsArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showReservationAdd && (
      <ReservationAdd
        carId={carss.id}
        item={carss.name}

      />
      )}
      <div>
        <button
          className="back-btn "
          onClick={() => navigate(-1)}
          type="button"
        >
          <BsFillArrowLeftCircleFill />
        </button>
      </div>
    </>
  );
};

export default CarDetails;
