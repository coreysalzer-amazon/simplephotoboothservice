import { 
	STORE_STREAM, 
	STORE_HEIGHT,
	STORE_WIDTH,
	STORE_CAPTURE_STATE
} from '../actions/webcam';

const INITIAL_STATE = {
	height: window.innerHeight,
	width: window.innerWidth,
	stream: null,
	captureState: 0
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
		default:
			return state;
			break;
	}
};
