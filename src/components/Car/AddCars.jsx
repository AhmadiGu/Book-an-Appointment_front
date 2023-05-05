import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createCar } from "../../redux/actions/addCarsActions";
import loader from "../../assets/loader2.gif";

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    description: "",
    price_per_day: "",
    photo: null,
    user: "",
    car_model: "",
    year: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const gohome = () => navigate("/");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!carData.photo) {
      toast.error("Please select an image for the car");
      setIsLoading(false);
      return;
    }
    const data = new FormData();
    data.append("car[name]", carData.name);
    data.append("car[description]", carData.description);
    data.append("car[price_per_day]", carData.price_per_day);
    data.append("car[photo]", carData.photo);
    data.append("car[user]", carData.user);
    data.append("car[car_model]", carData.car_model);
    data.append("car[year]", carData.year);

    dispatch(createCar(data)).then(() => {
      gohome();
      toast.info("Created Car Successfully");
      setIsLoading(false);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setCarData((prevCarData) => ({
      ...prevCarData,
      photo: file,
    }));
  };

  const handleInputChange = (event) => {
    setCarData({ ...carData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="add-car-form" onSubmit={handleSubmit}>
        <h2 className="title">Add A New Car</h2>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Enter Car name"
            value={carData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="form-control w-full"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            value={carData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full form-control"
            placeholder="Description"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            value={carData.user}
            placeholder="User name"
            name="user"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            value={carData.car_model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            value={carData.price_per_day}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Add an Image
          </span>
          <input
            type="file"
            name="image"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={handleImageChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Year
          </span>
          <input
            type="date"
            value={carData.year}
            name="year"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          {isLoading ? (
            <img src={loader} alt="loading" className="spinner" />
          ) : (
            "Add Car"
          )}
        </button>
      </form>
    </div>
  );
};
export default AddCar;
