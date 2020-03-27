import { combineReducers } from 'redux'
import students from './students'

import {alert} from './alert'
import {auth} from './auth'

import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  students,
  alert,
  auth,
  form: formReducer,
  loadingBar: loadingBarReducer,
})
