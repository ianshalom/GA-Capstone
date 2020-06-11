import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS, REQUEST_SERVICE } from '../types';
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


export const fetchServiceById = id => dispatch => {
	dispatch({
			type: FETCH_SERVICE_SUCCESS,
			service: {}
	})
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
	
