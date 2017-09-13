import Home from '../components/Home';
import { connect } from 'react-redux';
import { 
	storeStream, 
	storeHeight,
	storeWidth,
	storeCaptureState
} from '../actions/webcam';

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
		storeModalState: (state) => {
			dispatch(storeModalState(state));
		}
	};
};

function mapStateToProps(state){
	return {
		webcam: state.webcam,
		modal: state.modal	
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
