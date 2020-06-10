

import { createStore } from 'redux';
import wizerApp from '../reducers/index'

const logger = store => {
  return dispatch => {
     return action => {
      console.group(action.type)
      console.log('%c prev State', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action);
      const returnValue = dispatch(action)
      console.log('%c next state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return returnValue;
  }
  }
}

const promise = store => {

  return dispatch => {
      return (action) => {
      if (typeof action.then === 'function') {
        return action.then(dispatch)
      }
      return dispatch(action)
    }
  }
}

const applyMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch);
  })
}


 const initStore = () => {
  const middlewares = [promise]

      

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  //initialise store
  const store = createStore(wizerApp, browserSupport);

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  
  applyMiddlewares(store, middlewares)

  return store
}

export default initStore;












