import { FETCH_SERVICES } from '../types';
import db from '../db';


const services = []


export const fetchServices = () => {

	db.collection('services')
	.get()
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			const service = doc.data()
			console.log(service);
		})
	})


	return {
		type: 'FETCH_SERVICES',
		services
	}
}