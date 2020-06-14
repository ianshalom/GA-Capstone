
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../db/index';


const createUserProfile = (userProfile) => 
	db
	.collection('profiles')
	.doc(userProfile.uid)
	.set({userProfile})



export const register = async ({email, password, fullName, avatar}) => {
	try {
		const res = await firebase.auth().createUserWithEmailAndPassword(email, password) //Firebase function to create user
		const { user } = res //user object of data
		const userProfile = { uid: user.uid, fullName, email, avatar, services: [], description: '' }
		await createUserProfile(userProfile)
		return userProfile
		return true

	} catch(error) {
		
		return Promise.reject(error.message)
	}
}

export const login = ({email, password}) => 
	firebase.auth().signInWithEmailAndPassword(email, password)
	.catch(error => Promise.reject(error.message))

export const logout = () => firebase.auth().signOut();

//When auth state of our app changes, we should get back an authenticated user.
//Callback function gives us the data from the firebase. From onAuthStateChange sends back the authUser. 
export const onAuthStateChanged = (onAuthCallback) => firebase.auth().onAuthStateChanged(onAuthCallback);

export const getUserProfile = uid => 
	db.collection('profiles')
	.doc(uid)
		.get()
		.then(snapshot => { console.log(snapshot.data(), uid)
			return ({uid, ...snapshot.data()})})

