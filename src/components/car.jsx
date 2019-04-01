import React from 'react';

const Car = (props) => {
  const { brand, model, owner, plate } = props.car;
  return (
    <div className="car-container">
      <h2>{brand} - {model}</h2>
      <h3>{owner} ({plate})</h3>

    </div>
  );
};

export default Car;
