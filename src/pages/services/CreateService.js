import React, { useState } from 'react';
import { createService } from '../../actions/index';
import withAuthorization from '../../components/hoc/withAuthorization';
import { Redirect } from 'react-router-dom'

const CreateService = ({auth}) => {

	const [redirect, setRedirect] = useState(false)

	const [service, setService] = useState({
		category: 'mathematics',
		title: '',
		description: '',
		image: '',
		price: null
	});

	const handleChange = e => {
		const { name, value } = e.target
		setService({
			...service, [name]: value
		})
	}

	const handleSubmit = () => {
		const { user } = auth
		createService(service, user.uid)
		.then(() => setRedirect(true))
		.catch(() => alert('SOME ERROR!'))
	}

	if (redirect) { return <Redirect to="/" /> }

	return(

		<div className="create-page">
			  <div className="container">
			    <div className="form-container">
			      <h1 className="title">What do you feel like conducting?</h1>
			      <form>
			        <div className="field">
			          <label className="label">Category</label>
			          <div className="control">
			            <div className="select">
			              <select name="category" onChange={handleChange}>
			                <option value="history">History</option>
			                <option value="science">Science</option>
			                <option value="programming">Programming</option>
			                <option value="english">English</option>
			                <option value="mathematics">Mathematics</option>
			                <option value="marketing">Marketing</option>
			                <option value="networking">Networking</option>
			              </select>
			            </div>
			          </div>
			        </div>
			        <div className="field">
			          <label className="label">Title</label>
			          <div className="control">
			            <input
			              onChange={handleChange}
			              name="title"
			              className="input"
			              type="text"
			              placeholder="Text input" />
			          </div>
			        </div>
			        <div className="field">
			          <label className="label">Description</label>
			          <div className="control">
			            <textarea
			              onChange={handleChange}
			              name="description"
			              v-model="form.description"
			              className="textarea"
			              placeholder="Textarea"></textarea>
			          </div>
			        </div>
			        <div className="field">
			          <label className="label">Image Url</label>
			          <div className="control">
			            <input
			              onChange={handleChange}
			              name="image"
			              className="input"
			              type="text"
			              placeholder="Text input" />
			          </div>
			        </div>
			        <div className="field">
			          <label className="label">Price per Hour</label>
			          <div className="control">
			            <input
			              onChange={handleChange}
			              name="price"
			              className="input"
			              type="number"
			              placeholder="Text input" />
			          </div>
			        </div>
			        <div className="field is-grouped">
			          <div className="control">
			            <button
			              onClick={handleSubmit}
			              type="button" 
			              className="button is-link">Create</button>
			          </div>
			          <div className="control">
			            <button className="button is-text">Cancel</button>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			</div>

		)
}

export default withAuthorization(CreateService);