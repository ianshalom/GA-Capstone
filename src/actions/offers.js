import * as api from '../api/index';
import { FETCH_OFFERS_SUCCESS, CHANGE_OFFER_STATUS } from '../constants/index'

export const createOffer = offer => api.createOffer(offer)


const extractDataFromOffer = async (offer, userType) => {
	const service = await offer.service.get()

	const user = await offer[userType].get()

	offer.service = service.data()
	offer.service.id = service.id
	offer[userType] = user.data()

	return offer;
}



export const fetchSentOffers = userId => dispatch => {
	return api
	.fetchSentOffers(userId)
	.then(async offers => {
		const offersWithData = await Promise.all(offers.map(offer => extractDataFromOffer(offer, 'toUser')))
		dispatch({type: FETCH_OFFERS_SUCCESS, offers: offersWithData, offersType: 'sent'})
		return offersWithData
	})
}

export const fetchReceivedOffers = userId => dispatch => {
	return api
	.fetchReceivedOffers(userId)
	.then(async offers => {
		//Promise.all is waiting until all promises have been resolved 
		const offersWithData = await Promise.all(
			offers.map(offer => extractDataFromOffer(offer, 'fromUser'))
			)
		dispatch({type: FETCH_OFFERS_SUCCESS, offers: offersWithData, offersType: 'received'})
		return offersWithData
	})
}

export const acceptOffer = (offerId, status) => dispatch => 
	api.changeOfferStatus(offerId, 'accepted')
	.then(_ => dispatch({type: CHANGE_OFFER_STATUS, status: 'accepted', offerId, offersType: 'received'}))


export const declineOffer = (offerId, status) => dispatch => 
	api.changeOfferStatus(offerId, 'declined')
	.then(_ => dispatch({type: CHANGE_OFFER_STATUS, offerId, status: 'declined', offersType: 'received'}))


export const changeOfferStatus = (offerId, status) => dispatch => 
	api.changeOfferStatus(offerId, status)
	.then(_ => dispatch({type: CHANGE_OFFER_STATUS, offerId, status, offersType: 'received'}))
