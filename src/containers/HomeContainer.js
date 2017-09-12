import Home from '../components/Home';
import { connect } from 'react-redux';
import { 
	storeStream, 
	storeHeight,
	storeWidth,
	storeCaptureState
} from '../actions/webcam';

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
		}
	};
};

function mapStateToProps(state){
	return {
		webcam: state.webcam	
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
