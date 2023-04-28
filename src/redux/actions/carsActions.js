const fetchCars = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/cars')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'FETCH_CARS',
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};

export default fetchCars;
