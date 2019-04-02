import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { postCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  renderForm() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label htmlFor="brand">brand</label>
        <Field
          className="form-control"
          label="brand"
          name="brand"
          component="textfield"
          rows="8"
        />
        <label htmlFor="model">model</label>
        <Field
          className="form-control"
          label="model"
          name="model"
          component="textfield"
          rows="8"
        />
        <label htmlFor="owner">owner</label>
        <Field
          className="form-control"
          label="owner"
          name="owner"
          component="textfield"
          rows="8"
        />
        <label htmlFor="plate">plate</label>
        <Field
          className="form-control"
          label="plate"
          name="plate"
          component="textfield"
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

