

import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers'


 const initStore = () => {

  const wizerApp = combineReducers({
    service: servicesReducer
  })
      

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  //initialise store
  const store = createStore(wizerApp, browserSupport);
  return store
}

export default initStore;












