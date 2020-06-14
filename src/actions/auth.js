import {  SET_AUTH_USER, RESET_AUTH_STATE} from '../constants';
import * as api from '../api/index';



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