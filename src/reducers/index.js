import { combineReducers } from 'redux'
import entities from './entities'
import { alert } from './alert'
import { auth } from './auth'

import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  entities,
  alert,
  auth,
  form: formReducer,
  loadingBar: loadingBarReducer,
})
