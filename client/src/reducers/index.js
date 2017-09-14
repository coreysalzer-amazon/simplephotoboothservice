import { combineReducers } from 'redux';
import camera from './camera';
import modal from './modal';

export default combineReducers({
	camera,
	modal
});
