import Login from '../screens/Login';
import { reduxForm } from 'redux-form';

const withForm = reduxForm({
    form: 'Login'
})

export default withForm;