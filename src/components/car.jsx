import React from 'react';
import { Link } from 'react-router-dom';

const Car = (props) => {
  const { brand, model, owner, plate, id } = props.car;
  return (
    <Link to={`/cars/${id}`}>
      <div className="car-container">
        <h2>{brand} - {model}</h2>
        <h3>{owner} ({plate})</h3>
      </div>
    </Link>
  );
};

export default Car;
