import { FETCH_SERVICES } from '../types';


const services = []


export const fetchServices = () => {
	return {
		type: 'FETCH_SERVICES',
		services
	}
}