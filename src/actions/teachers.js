import { createAction } from 'redux-actions';
import teachers from '../teachers';

export const getTeachers = createAction('LOAD_TEACHERS', () => ({
    request: {
        url: '/teachers'
    }
  })
);

export const addTeacher = createAction('ADD_TEACHER', (teacher) => ({
  request: {
    url: '/teachers',
    method: 'POST',
    data: teacher
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/teachers';
    }
  }
})
);