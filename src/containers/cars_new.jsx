import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

// [...]


export default reduxForm({ form: 'newPostForm' })(
 connect(null
