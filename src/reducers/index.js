
import { combineReducers } from 'redux'
import services from './services';
import selectedService from './selectedService'
import auth from './auth';
import offers from './offers'


const wizerApp = combineReducers({
	services,
	selectedService,
	auth,
	offers
})

export default wizerApp;



// import { FETCH_SERVICES_SUCCESS } from '../types';



// //Initial state or last state.

// const servicesReducer = (state = {items: []}, action) => {
// 	switch(action.type) {
// 		//if action.type is true, the return statement will get the services state/items/array.
//       //The state will hold the object, an initial items key with an empty array. 
// 		case FETCH_SERVICES_SUCCESS:
// 			return {...state, items: action.services}
// 			//This gets our initial data and then stores the services through action.services which will now be in the home page.
// 		default: 
// 			return state;
// 	}
// }

// export default servicesReducer;