import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Car from '../components/car'

class CarsIndex extends Component {
  componentWillMount() {
    // debugger
    this.props.fetchCars();
  }

  render() {
    return (
      <div>
        CarsIndex
        <Link to={"/cars/new"}>
          ADD NEW CAR
        </Link>
        {this.props.cars.map((car) => {
          return <Car key={car.plate} car={car} />;
        })}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
