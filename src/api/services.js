import firebase from 'firebase/app'

//Allows user registration/authentication with firebase.

import db from '../db/index';


// --------------- Services ------------------
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

	export const fetchUserServices = userId => 
	
	db.collection('services')
	.where("user", "==", userId)
	.get()
	.then((snapshot) => { 
		const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
		return services
	})

	export const createService = (service) => {
		return db
		.collection('services')
		.add(service)
		.then(docRef => docRef.id)
	}
