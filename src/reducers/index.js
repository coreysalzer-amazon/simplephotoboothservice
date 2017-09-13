import { combineReducers } from 'redux';
import webcam from './webcam';
import modal from './modal';

export default combineReducers({
	webcam,
	modal
});
