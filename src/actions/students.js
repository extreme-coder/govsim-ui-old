import { createAction } from 'redux-actions';

export const getStudents = createAction('LOAD_STUDENTS', () => ({
    request: {
        url: '/students'
    }
  })
);

export const addStudent = createAction('ADD_STUDENT', (student) => ({
  request: {
    url: '/students',
    method: 'POST',
    data: student
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/users';
    }
  }
})
);