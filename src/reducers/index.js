import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import UserListReducer from '../reducers/UserListReducer';

export default combineReducers({
    form: reducer,
    form1: UserListReducer,
});