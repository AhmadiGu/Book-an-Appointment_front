/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
import {
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import styles from './ReserveAdd.module.css';
import createReservation from '../../redux/actions/reservationsActions';

const ReservationAdd = ({ item, carId }) => {
  const [reservationData, setReservationData] = useState({
    date: '',
    city: '',
    duration: '',
    car_id: carId,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);

  useEffect(() => {
    dispatch(createReservation(reservationData));
  }, [dispatch, reservationData]);

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
    e.preventDefault();
    const reservation = {
      date: reservationData.date,
      item,
      city: reservationData.city,
      duration: parseInt(reservationData.duration, 10),
      user_id: 10,
      car_id: reservationData.car_id,
    };

    dispatch(createReservation(reservation));
  };

  if (reservation.status === 'succeeded') {
    navigate('/reservedCars');
  }

  return (
    <div className={styles.main}>
      <div className={styles.form_containers}>
        <div className={styles.back_button_div}>
          <button type="button" className={styles.back_button} onClick={() => navigate(-1)}>
            <BsFillArrowLeftCircleFill />
          </button>
        </div>
        <div className={styles.form_wrapper_container}>
          <form onSubmit={handleSubmit} className={styles.formss}>
            <h2 className={styles.header_title}>
              Make reservation for
              {' '}
              {item}

            </h2>
            <div className={styles.line} />
            <p className={styles.info}>
              There are 34 different versions of the Vesper. Today five series are in production:
              the classic manual transmission PX and the modern CVT transmission S, LX, GT, and GTS.
              We have showrooms all over the globe which some include test-riding facilities.
              If you wish to find out if a
              test-ride, please make reservation.
            </p>
            <div className={styles.input_wrappers}>
              <input
                type="text"
                id="username"
                name="username"
                value={reservationData.car_id}
                className={styles.form_inputs}
              />
            </div>
            <div className={styles.input_wrappers}>
              <input
                type="text"
                id="item"
                name="item"
                value={item}
                className={styles.form_inputs}
              />
            </div>
            <div className={styles.input_wrappers}>
              <input
                type="date"
                id="date"
                name="date"
                onChange={handleDateChange}
                className={styles.form_inputs}
                placeholder="Date"
              />
            </div>
            <div className={styles.input_wrappers}>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleCityChange}
                className={styles.form_inputs}
                placeholder="City"
              />
            </div>
            <div className={styles.input_wrappers}>
              <input
                type="number"
                id="duration"
                name="duration"
                onChange={handleDurationChange}
                required
                className={styles.form_inputs}
                placeholder="Duration in days"
              />
            </div>
            <button type="submit" className={styles.form_submit}><div className={styles.text_res}>Reserve</div></button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Define the propTypes object
ReservationAdd.propTypes = {
  item: PropTypes.string.isRequired,
  carId: PropTypes.number.isRequired,
};

export default ReservationAdd;
