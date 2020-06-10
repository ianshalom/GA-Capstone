import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchServiceById } from '../actions/'

const ServiceDetail = props => {
	//{ id } is defined as the placeholder in App.js as part of the serviceDetail page path.
	const { id } = useParams();
	const { dispatch } = props;

	useEffect(() => {
		props.dispatch(fetchServiceById(id))
	}, [id, dispatch])
		
		const { service } = props;
		
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
		              <p className="has-text-centered">
		                <button className="button is-medium is-info is-outlined">
		                  Learn more
		                </button>
		              </p>
		            </div>
		          </div>
		        </div>
		      </div>
		      
		    </section>
		  )
		}

		const mapStateToProps = state => ({service: state.selectedService.item})

export default connect(mapStateToProps)(ServiceDetail);