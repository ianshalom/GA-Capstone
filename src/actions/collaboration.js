import * as api from '../api/index';

export const collaborate = ({collaboration, message}) => 
api.createCollaboration(collaboration)
	.then(collabId => {
		message.clickToAction = `/collaborations/${collabId}`
		api.sendMessage(message)
		return collabId
	})