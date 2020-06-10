import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from '../types';
import * as api from '../api/index';


export const fetchServices = () => {

	return api
	.fetchServices()
	.then(services => ({
				type: FETCH_SERVICES_SUCCESS,
				services
			})
	)
}


export const fetchServiceById = id => {
	return api
	.fetchServiceById(id)
	.then(service => ({
				type: FETCH_SERVICE_SUCCESS,
				service
			})
	)
}
	
