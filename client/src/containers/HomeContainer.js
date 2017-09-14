import Home from '../components/Home';
import { connect } from 'react-redux';
import { 
	storeStream, 
	storeHeight,
	storeWidth,
	storeCaptureState,
	storePhoto,
	resetCamera
} from '../actions/camera';

import {
	storeModalState
} from '../actions/modal';

const mapDispatchToProps = (dispatch) => {
	return {
		storeStream: (stream) => {
			dispatch(storeStream(stream));	
		},
		storeHeight: (height) => {
			dispatch(storeHeight(height));	
		},
		storeWidth: (width) => {
			dispatch(storeWidth(width));	
		},
		storeCaptureState: (state) => {
			dispatch(storeCaptureState(state));	
		},
		storePhoto: (photoData) => {
			dispatch(storePhoto(photoData));	
		},
		resetCamera: (state) => {
			dispatch(resetCamera(state));	
		},
		storeModalState: (state) => {
			dispatch(storeModalState(state));
		}
	};
};

function mapStateToProps(state){
	return {
		camera: state.camera,
		modal: state.modal	
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
