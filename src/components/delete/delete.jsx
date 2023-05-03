/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteCar } from '../../redux/car/car';

const CarDelete = ({ car }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  return (
    <div>
      <p>{car.make}</p>
      <p>{car.model}</p>
      <button onClick={() => handleDelete(car.id)}>Delete</button>
    </div>
  );
}

export default CarDelete;
