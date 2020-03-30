import { createAction } from 'redux-actions';
import teachers from '../teachers';

export const getTeachers = createAction('LOAD_TEACHERS', () => ({
    request: {
        url: '/teachers'
    }
  })
);

export const getTeacher = createAction('LOAD_TEACHER', (id) => ({
    request: {
      url: '/teachers/' + id
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

export const updateTeacher = createAction('UPDATE_TEACHER', (teacher) => ({
  request: {
    url: '/teachers/' + teacher.id,
    method: 'PUT',
    data: teacher
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/teachers';
    }
  }
})
);