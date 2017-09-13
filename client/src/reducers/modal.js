import { 
	STORE_MODAL_STATE, 
} from '../actions/modal';

const INITIAL_STATE = {
	showModal: false
};

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case STORE_MODAL_STATE:
			return {
				...state,
				showModal: action.payload
			};
			break;
		default:
			return state;
			break;
	}
};
