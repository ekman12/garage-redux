// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const POST_CAR = 'POST_CAR';
export const FETCH_CAR = 'FETCH_CAR';
export const DELETE_CAR = 'DELETE_CAR';

const URL = 'https://wagon-garage-api.herokuapp.com/tomek/cars';

export function fetchCars() {
  const promise = fetch(URL).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function postCar(body, callback) {
  const promise = fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(callback);

  return {
    type: POST_CAR,
    payload: promise
  };
}

export function deleteCar(id, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url, {
    method: 'DELETE',
  }).then(r => r.json())
    .then(callback);

  return {
    type: DELETE_CAR,
    payload: promise
  };
}

