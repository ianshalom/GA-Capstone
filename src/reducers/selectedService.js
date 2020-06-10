

import { FETCH_SERVICE_SUCCESS } from '../types';



//Initial state or last state.
const INITIAL_STATE = {
	item: {}
}

const selectedService = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_SERVICE_SUCCESS:
			return {item: action.service}
		default:
		console.log(state);
			return state
	}
}

export default selectedService;