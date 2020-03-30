import { combineReducers } from 'redux'
import students from './students'
import schools from './schools'
import classes from './classes'
import rooms from './rooms'
import {alert} from './alert'
import {auth} from './auth'
import teachers from './teachers'

import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  students,
  schools,
  teachers,
  rooms,
  classes,
  alert,
  auth,
  form: formReducer,
  loadingBar: loadingBarReducer,
})
