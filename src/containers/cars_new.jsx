import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { postCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.postCar(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label htmlFor="brand">Brand</label>
        <Field
          className="form-control"
          label="Brand"
          name="brand"
          component="input"
          rows="8"
        />
        <label htmlFor="model">Model</label>
        <Field
          className="form-control"
          label="Model"
          name="model"
          component="input"
          rows="8"
        />
        <label htmlFor="owner">Owner</label>
        <Field
          className="form-control"
          label="Owner"
          name="owner"
          component="input"
          rows="8"
        />
        <label htmlFor="plate">Plate</label>
        <Field
          className="form-control"
          label="Plate"
          name="plate"
          component="input"
          rows="8"
        />
        <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Create Post
        </button>
      </form>
    );
  }

  render() {
    const renderedForm = this.renderForm()
    return (
      <div>
        {renderedForm}
      </div>
    );
  }
}


export default reduxForm({ form: 'newPostForm' })(
  connect(null, { postCar })(CarsNew)
);

const form = {

}

