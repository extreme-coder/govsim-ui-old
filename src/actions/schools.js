import { createAction } from 'redux-actions';

export const getSchools = createAction('LOAD_SCHOOLS', () => ({
    request: {
        url: '/schools'
    }
  })
);

export const getSchool = createAction('LOAD_SCHOOLS', (id) => ({
  request: {
      url: '/schools' + id
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

export const updateSchool = createAction('UPDATE_SCHOOL', (school) => ({
  request: {
    url: '/schools/' + school.id,
    method: 'PUT',
    data: school
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/schools';
    }
  }
})
);