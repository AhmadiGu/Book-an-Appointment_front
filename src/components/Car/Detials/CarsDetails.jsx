import React, { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import './carsDetails.css';
import ReservationAdd from '../../Reservation/ReservationAdd';

const CarDetails = () => {
  const navigate = useNavigate();
  const carDetails = useSelector((state) => state.cars); 
  console.log('cars',carDetails);

  const [showReservationAdd, setShowReservationAdd] = useState(false);
  const handleReservationClick = () => {
    setShowReservationAdd(true);
  };
  const { id } = useParams();
  console.log('id', id)
  const cars = carDetails; 
  console.log('cars', cars)
  const carss = cars?.find((c) => c.id === parseInt(id, 10));
  console.log('carss', carss)
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
      {carss && (
        <div key={carss.id} className="details-con p-5 ">
          <div className="details-img">
            <img
              src={`${carss?.photo}`}
              alt={carss?.name}
              className="car-image w-100"
            />
          </div>
          <div className="details-info">
            <div className="details-text ">
              <h1 className="text-name">
                {carss?.name}
              </h1>
              <p className="text-dec">
                {carss?.description}
              </p>
            </div>
            <div className="other ">
              <div className="other-cont p-3">
                <div className=" other-title ">
                  <h3 className="other-h">Other Details</h3>
                </div>
                <ul className="other-ul">
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
      )}
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
