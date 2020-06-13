

import { createStore, applyMiddleware, compose } from 'redux';
import wizerApp from '../reducers/index'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


 const initStore = () => {
  const middlewares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger)
  }
  
  //initialise store
  const store = createStore(
    wizerApp, 
    composeEnhancers(applyMiddleware(...middlewares))
    );

  return store
}

export default initStore;












