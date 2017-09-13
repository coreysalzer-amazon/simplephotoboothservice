import { 
	STORE_STREAM, 
	STORE_HEIGHT,
	STORE_WIDTH,
	STORE_CAPTURE_STATE,
	RESET_WEBCAM
} from '../actions/webcam';

const INITIAL_STATE = {
	height: window.innerHeight,
	width: window.innerWidth,
	stream: null,
	captureState: 0,
	resetState: false
};

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case STORE_STREAM:
			return {
				...state,
				stream: action.payload
			};
			break;
		case STORE_HEIGHT:
			return {
				...state,
				height: action.payload
			};
			break;
		case STORE_WIDTH:
			return {
				...state,
				width: action.payload
			};
			break;
		case STORE_CAPTURE_STATE:
			return {
				...state,
				captureState: action.payload
			};
			break;
		case RESET_WEBCAM:
			return {
				...state,
				resetState: action.payload
			};
			break;
		default:
			return state;
			break;
	}
};
