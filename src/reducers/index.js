import { combineReducers } from 'redux'
import students from './students'
import schools from './schools'

import {alert} from './alert'
import {auth} from './auth'

import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  students,
  schools,
  alert,
  auth,
  form: formReducer,
  loadingBar: loadingBarReducer,
})
