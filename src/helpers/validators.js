



export const isValidImage = (value) => {
	if (!value) return true
	if (typeof value !== 'string') return false

		const validFormats = ['png', 'jpeg', 'jpg', 'svg'];

		//checks if image has the extention type listed in validFormats
		const extention = value.split('.').pop()
		return validFormats.includes(extention);
		//returns true or false

}

export const isValidUrl = value => {
	if (!value) return true
	if (typeof value !== 'string') return false

	const regularExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
	const regex = new RegExp(regularExpression)

	return value.match(regex) ? true : false; 
}

export const match = (getValues, field) => value => {
	if (!value) return true
	if (typeof value !== 'string') return false

	const checkValue = getValues()[field]
	return checkValue === value;
	//Returns true or false depending on password comparison. 
}






