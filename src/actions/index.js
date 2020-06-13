import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS, REQUEST_SERVICE, SET_AUTH_USER, RESET_AUTH_STATE, FETCH_USER_SERVICES_SUCCESS} from '../constants';
import * as api from '../api/index';

export const requestService = () => (
		{
			type: REQUEST_SERVICE
		}
	)
	
export const resetPreviousService = () => (
		{
			type: FETCH_SERVICE_SUCCESS,
			service: {}
		}
	)

export const fetchServices = () => dispatch => {

	return api
	.fetchServices()
	.then(services => dispatch (
			{
				type: FETCH_SERVICES_SUCCESS,
				services
			}
			)
	)
}

export const fetchUserServices = userId => dispatch => 
	api
	.fetchUserServices(userId).then(services => 
		dispatch({type: FETCH_USER_SERVICES_SUCCESS, services}))


export const fetchServiceById = id => (dispatch, getState) => {
	
	//Last state is the last service item. store.getState from store.
	const lastState = getState().selectedService.item

	//Makes check to see if id of state is the same as the dispatch id, if same, there is no need to make a new request.
	//Displays same page as it gets the data from the state.
	if(lastState.id && lastState.id === id) {
		return Promise.resolve()
	}

	dispatch({type: REQUEST_SERVICE })
	return api
	.fetchServiceById(id)
	.then(service => dispatch (
			{
				type: FETCH_SERVICE_SUCCESS,
				service
			}
		)
	)
}


export const createService = (service, userId) => {
	service.price = parseInt(service.price, 10)
	service.user = userId

	return api
	.createService(service)
}


export const register = (userRegisterData) => api.register({...userRegisterData})
export const login = (loginData) => api.login({...loginData})
export const onAuthStateChanged = (onAuthCallback) => api.onAuthStateChanged(onAuthCallback);

export const logout = () => dispatch => 
	api.logout()
	.then(_ => dispatch({user: null, type: SET_AUTH_USER}))

export const storeAuthUser = authUser => dispatch => {
	if(authUser) {
		return api
			.getUserProfile(authUser.uid)
			.then(userWithProfile => {
				//Dispatch action to change auth state
				dispatch({user: userWithProfile, type: SET_AUTH_USER})
				return userWithProfile
			})
	} else {
		//Dispatch action
		return dispatch({user: null, type: SET_AUTH_USER})
	}
}

export const resetAuthState = () => ({type: RESET_AUTH_STATE})