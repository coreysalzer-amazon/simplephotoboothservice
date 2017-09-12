export const STORE_STREAM = "STORE_STREAM";
export const STORE_HEIGHT = "STORE_HEIGHT";
export const STORE_WIDTH = "STORE_WIDTH";
export const STORE_CAPTURE_STATE = "STORE_CAPTURE_STATE";

export function storeStream(stream){
	return {
		type: STORE_STREAM,
		payload: stream
	};	
};

export function storeHeight(height){
	return {
		type: STORE_HEIGHT,
		payload: height 
	};
};

export function storeWidth(width){
	return {
		type: STORE_WIDTH,
		payload: width 
	};
};

export function storeCaptureState(state){
	return {
		type: STORE_CAPTURE_STATE,
		payload: state
	};
};
