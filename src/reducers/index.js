import { combineReducers } from 'redux'
import students from './students'
import schools from './schools'
import classes from './classes'
import {alert} from './alert'
import {auth} from './auth'
import teachers from './teachers'

import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  students,
  schools,
  teachers,
  classes,
  alert,
  auth,
  form: formReducer,
  loadingBar: loadingBarReducer,
})
