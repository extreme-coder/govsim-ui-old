import { createAction } from 'redux-actions';

export const getSchools = createAction('LOAD_SCHOOLS', () => ({
    request: {
        url: '/schools'
    }
  })
);

export const addSchool = createAction('ADD_SCHOOL', (school) => ({
  request: {
    url: '/schools',
    method: 'POST',
    data: school
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      //window.location = '/schools';
    }
  }
})
);