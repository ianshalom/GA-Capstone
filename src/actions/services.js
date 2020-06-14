
import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS, REQUEST_SERVICE, FETCH_USER_SERVICES_SUCCESS} from '../constants';
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
	.then(async service => {
		// service.user = await api.getUserProfile(service.user)

		const user = await service.user.get()
		service.user = user.data()
		service.user.uid = user.id

		dispatch({type: FETCH_SERVICE_SUCCESS, service})}
	)
	}
		


export const createService = (service, userId) => {
	service.price = parseInt(service.price, 10)
	//Creating reference from api file under createRef function
	service.user = api.createRef('profiles', userId)

	return api
	.createService(service)
}