// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const POST_CAR = 'POST_CAR';

const URL = 'https://wagon-garage-api.herokuapp.com/tomek/cars';

  // const cars = [
  //   { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  //   { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  //   { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  //   { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  // ];

export function fetchCars() {
  const promise = fetch(URL).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function postCar(brand, model, owner, plate) {
  const body = { brand, model, owner, plate };
  const promise = fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_CAR,
    payload: promise // Will be resolved by redux-promise
  };
}
