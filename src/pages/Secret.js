import React from 'react';
import withAuthorization from '../components/hoc/withAuthorization';

const Secret = (props) => {

	console.log(props);

	return (
		<h1>I am a secret page. ONLY AUTH USER CAN SEE ME. </h1>
		)
}


export default withAuthorization(Secret);
