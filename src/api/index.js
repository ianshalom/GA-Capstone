import db from '../db/index';

export const fetchServiceById = (id) =>
	db.collection('services')
	.doc(id)
	.get()
	.then(snapshot => ({id: snapshot.id, ...snapshot.data()}))
	


export const fetchServices = () => 
	db.collection('services')
	.get()
	.then((snapshot) => {
		const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
		return services
	})
