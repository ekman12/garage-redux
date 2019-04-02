import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { postCar } from '../actions';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class CarsNew extends Component {
// const CarsNew = (props) => {
  onSubmit = (values) => {
    debugger
    this.props.postCar(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  render() {
    // const { pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="brand" type="text"
          component={renderField} label="Brand"
          validate={[ required, maxLength15 ]}
        />
        <Field name="model" type="text"
          component={renderField} label="Model"
          validate={required}
          // warn={aol}
        />
        <Field name="owner" type="text"
          component={renderField} label="Owner"
          validate={required}
          // validate={[ required, number, minValue18 ]}
          // warn={tooOld}
        />
        <Field name="plate" type="text"
          component={renderField} label="Plate"
          validate={[ required, maxLength15 ]}
        />
        <div>
          <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </div>
      </form>
    )
  }
}

          // <button type="submit" disabled={submitting}>Submit</button>
          // <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>

// class CarsNew extends Component {


//   onSubmit = (values) => {
//     this.props.postCar(values, (post) => {
//       this.props.history.push('/');
//       return post;
//     });
//   }

//   renderForm() {
//     const required = value => value ? undefined : 'Required';
//     const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
//     return (
//       <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//         <Field
//           className="form-control"
//           label="Brand"
//           name="brand"
//           component={renderField}
//           rows="8"
//           validate={[required, maxLength]}
//           warn={aol}
//         />
//         <Field
//           className="form-control"
//           label="Model"
//           name="model"
//           component={renderField}
//           rows="8"
//           validate={[ required ]}
//         />
//         <Field
//           className="form-control"
//           label="Owner"
//           name="owner"
//           component={renderField}
//           rows="8"
//           validate={[ required ]}
//         />
//         <Field
//           className="form-control"
//           label="Plate"
//           name="plate"
//           component={renderField}
//           rows="8"
//           validate={[ required ]}
//         />
//         <button className="btn btn-primary" type="submit"
//           disabled={this.props.pristine || this.props.submitting}>
//           Create Post
//         </button>
//       </form>
//     );
//   }

//   render() {
//     const renderedForm = this.renderForm()
//     return (
//       <div>
//         {renderedForm}
//       </div>
//     );
//   }
// }


// export default reduxForm({ form: 'newPostForm' })(
//   connect(null, { postCar })(CarsNew)
// );






// export default reduxForm({
//   form: 'fieldLevelValidation' // a unique identifier for this form
// })(CarsNew)

export default reduxForm({ form: 'newPostForm' })(
  connect(null, { postCar })(CarsNew)
);
