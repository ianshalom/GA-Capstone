import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchServiceById } from '../actions/'

import ApplicationModal from '../components/ApplicationModal';

import Spinner from '../components/Spinner'

const ServiceDetail = props => {
	//{ id } is defined as the placeholder in App.js as part of the serviceDetail page path.
	const { id } = useParams();
	const { dispatch, isFetching} = props;

	useEffect(() => {
		// dispatch(resetPreviousService())
		// dispatch(requestService())
		props.dispatch(fetchServiceById(id))
	}, [id, dispatch])
		
		const { service, auth } = props;

		//Display spinner when loading page. If you are fetching and there is no service id, means there is no data fetched, meaning spinner will load until service id is present.

		// Previous data is still stored even as new page is clicked. 

		if (isFetching || id !== service.id) {
			return <Spinner />
		}
		
	return (
		    <section className="hero is-fullheight is-default is-bold">
		      <div className="hero-body">
		        <div className="container has-text-centered">
		          <div className="columns is-vcentered">
		            <div className="column is-5">
		              <figure className="image is-4by3">
		                 <img src={service.image} alt="Description" />
		              </figure>
		            </div>
		            <div className="column is-6 is-offset-1">
		              <h1 className="title is-2">
		                  {service.title}
		              </h1>
		              <h2 className="subtitle is-4">
		                  {service.description}
		              </h2>
		              <br />
		              <div className="has-text-centered">
		              <ApplicationModal 
		              	auth={auth}
		              	service={service} />
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      
		    </section>
		  )
		}

		const mapStateToProps = ({selectedService, auth}) => (
		{
			service: selectedService.item,
			isFetching: selectedService.isFetching,
			auth
		})

export default connect(mapStateToProps)(ServiceDetail);