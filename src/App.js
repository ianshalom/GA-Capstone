/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import { Provider } from 'react-redux'
import initStore from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FaqPage from './pages/Faq';
import ProfilePage from './pages/Profile';
import ServicesPage from './pages/Services';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'

const store = initStore()


function App() {
  return (
    <Provider store={store}>
      <Router>
         <Navbar />
         <Navbar id="navbar-clone" />
         <Sidebar />
	      <Switch>
		      <Route exact path="/">
		      	<HomePage />
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
		      <Route exact path="/login">
		      	<LoginPage />
		      </Route>
		      <Route exact path="/register">
		      	<RegisterPage />
		      </Route>
	      </Switch>
      </Router>
    </Provider>
    );
}

export default App;
