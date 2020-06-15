

import { combineReducers } from 'redux'
import { CHANGE_OFFER_STATUS } from '../constants/index'


const createOfferList = offersType => {
	return (state = [], action) => {
		if(action.offersType !== offersType) {
			return state
		}

		switch(action.type) {
			case 'FETCH_OFFERS_SUCCESS':
			return action.offers
			case CHANGE_OFFER_STATUS:
				const nextState = [...state]
				const offerIndex = nextState.findIndex(o => o.id === action.offerId)
				nextState[offerIndex].status = action.status
				return nextState
			default: 
			return state
		}
		// return state
	}
}

//Using combine reducers to 
const offers = combineReducers({
	received: createOfferList('received'),
	sent: createOfferList('sent')
})

export default offers;