

import { combineReducers } from 'redux'


const createOfferList = offersType => {
	return (state = [], action) => {

		return state
	}
}

//Using combine reducers to 
const offers = combineReducers({
	received: createOfferList('received'),
	sent: createOfferList('sent')
})

export default offers;