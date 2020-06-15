
import { Timestamp } from '../db'


export const newCollaboration = ({offer: { service, time, toUser, id}, fromUser}) => ({
	serviceId: service.id, // define ID on offer.service 
	title: service.title,
	image: service.image,
	time: time * 60 * 60,
	allowedPeople: [fromUser.uid, toUser.uid],
	joinedPeople: [],
	toUser: toUser.id,
	fromUser: fromUser.id,
	fromOffer: id,
	createdAt: Timestamp.fromDate(new Date())//from timestamp
})

export const newMessage = ({offer: { service, toUser }, fromUser}) => ({
	isRead: false,
	type: 'invitation',
	text: `Hello ${toUser.fullName}, let's collaborate as soon as possible`,
	clickToAction: '',
	toUser: toUser.uid,
	fromUser: {
		id: fromUser.uid,
		name: fromUser.fullName,
		avatar: fromUser.avatar
	},
	serviceTitle: service.title,
	serviceLink: `/services/${service.id}`,
	createdAt: Timestamp.fromDate(new Date())
})


