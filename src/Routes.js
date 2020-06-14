
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FaqPage from './pages/Faq';
import ProfilePage from './pages/Profile';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import SecretPage from './pages/Secret';
import UserServicesPage from './pages/services/UserServices';
import SentOffersPage from './pages/offers/SentOffers';
import ReceivedOffersPage from './pages/offers/ReceivedOffers';
import CreateServicePage from './pages/services/CreateService'

const Routes = () => {
	return (
			<Switch>
			 <Route exact path="/">
		      	<HomePage />
		      </Route>   
		      <Route exact path="/secret">
		      	<SecretPage />
		      </Route>
		      <Route exact path="/login">
		      	<LoginPage />
		      </Route>
		      <Route exact path="/register">
		      	<RegisterPage />
		      </Route>
		       <Route exact path="/offers/sent">
		      	<SentOffersPage />
		      </Route>
		       <Route exact path="/offers/received">
		      	<ReceivedOffersPage />
		      </Route>
		    <Route exact path="/services/me">
		      	<UserServicesPage />
		      </Route>
		      <Route exact path="/services/new">
		      	<CreateServicePage />
		      </Route>
		      <Route exact path="/services/:id">
		      	<ServiceDetailPage />
		      </Route>
		   	<Route exact path="/services">
		      	<ServicesPage />
		      </Route>
		       <Route exact path="/faq">
		      	<FaqPage />
		      </Route>
		       <Route exact path="/profile">
		      	<ProfilePage />
		      </Route>
		      
		     
	      </Switch>
		)
}

export default Routes;