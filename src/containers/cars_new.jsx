import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { postCar } from '../actions';

const required = (value) => {
  return value ? undefined : 'Required';
};

const validPlate = (value) => {
  return value && /(([A-Z0-9]|(\s))+)/.test(value) ? 'Has to be all caps and no special characters' : undefined;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.postCar(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="brand"
          type="text"
          component={renderField}
          label="Brand"
          validate={required}
        />
        <Field
          name="model"
          type="text"
          component={renderField}
          label="Model"
          validate={required}
        />
        <Field
          name="owner"
          type="text"
          component={renderField}
          label="Owner"
          validate={required}
        />
        <Field
          name="plate"
          type="text"
          component={renderField}
          label="Plate"
          validate={required}
          warn={validPlate}
        />
        <div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.props.invalid || this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'newPostForm' })(
  connect(null, { postCar })(CarsNew)
);
