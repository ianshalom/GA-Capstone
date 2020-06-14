import React, { useState } from 'react';
import Modal from './Modal';
import { createRef, createOffer } from '../actions'
import { useToasts } from 'react-toast-notifications'

const ApplicationModel = ({service, auth}) => {

	const { addToast } = useToasts()
	const [ offer, setOffer ] = useState({
		fromUser: '',
		toUser: '',
		service: '',
		status: 'pending',
		price: 0,
		time: 0,
		note: ''
	})

	const handleChange = ({target: {value, name}}) => {

		if (name === 'time') {
			const price = Math.round(value * service.price * 100) /100
			return setOffer({...offer, [name]: value, price})
		}

		setOffer({...offer, [name]: value})
	}

	const handleSubmit = (closeModal) => {
		const offerCopy = { ...offer }

		offerCopy.fromUser = createRef('profiles', auth.user.uid)
		offerCopy.toUser = createRef('profiles', service.user.uid)
		offerCopy.service = createRef('services', service.id)
		offerCopy.time = parseInt(offer.time, 10)

		createOffer(offerCopy)
		.then(_ => {
			closeModal()
			addToast("Your offer was successfully placed.", { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
		}, (error) => {
			console.log(error)
		})

	}

console.log(service.user.userProfile.fullName)
	return (

					<Modal 
						onModalSubmit={handleSubmit}
						actionButton="Apply for course">
		                <div className="field">
						  <input
						  	 onChange={handleChange}
						  	 name="note"
						     className="input is-large"
						     type="text"
						     placeholder="Write some catchy note"
						     max="5"
						     min="0"
						     />
						  <p className="help">Note can increase chance of getting the service</p>
						</div>
						<div className="field">
						  <input
						  	 onChange={handleChange}
						  	 name="time"
						     className="input is-large"
						     type="number"
						     placeholder="How long you need service for ?"
						     max="5"
						     min="0"
						     />
						  <p className="help">Enter time in hours</p>
						</div>
						<div className="service-price has-text-centered">
						  <div className="service-price-title">
						  {service.user.userProfile && `Upon acceptance ${service.user.userProfile.fullName} will charge you:`}  
						  </div>
						  <div className="service-price-value">
						    <h1 className="title">{offer.price}</h1>
						  </div>
						</div>
		                </Modal>
		)
}

export default ApplicationModel;