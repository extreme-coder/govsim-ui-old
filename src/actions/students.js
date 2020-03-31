import { createAction } from 'redux-actions';

export const getStudents = createAction('LOAD_STUDENTS', () => ({
    request: {
        url: '/students'
    }
  })
);

export const getStudent = createAction('LOAD_STUDENT', (id) => ({
  request: {
    url: '/students/' + id
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
      window.location = '/students';
    }
  }
})
);

export const updateStudent = createAction('UPDATE_STUDENT', (student) => ({
  request: {
    url: '/students/' + student.id,
    method: 'PUT',
    data: student
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/students';
    }
  }
})
);