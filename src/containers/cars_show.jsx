import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions';
import Car from '../components/car';

class CarsShow extends Component {

  componentWillMount() {
    this.props.fetchCar(this.props.idFromUrl);
  }

  render() {
    if (this.props.car === undefined) {
      return 'Loading...'
    } return (
      <div>
        CarsShow
        <Car key={this.props.car.plate} car={this.props.car} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === idFromUrl);
  return { car, idFromUrl };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
