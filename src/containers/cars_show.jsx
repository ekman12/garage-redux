import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar, deleteCar } from '../actions';
import Car from '../components/car';

class CarsShow extends Component {

  componentWillMount() {
    this.props.fetchCar(this.props.idFromUrl);
  }

  handleClick = () => {
    console.log('handleClick')
    this.props.deleteCar(this.props.idFromUrl);
  }

  render() {
    if (this.props.car === undefined) {
      return 'Searching for the car';
    }
    return (
      <div>
        CarsShow
        <Car key={this.props.car.plate} car={this.props.car} />
        <div onClick={this.handleClick}> DELETE</div>
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
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
