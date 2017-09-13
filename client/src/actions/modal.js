export const STORE_MODAL_STATE = "STORE_MODAL_STATE";

export function storeModalState(state){
	return {
		type: STORE_MODAL_STATE,
		payload: state
	};	
};