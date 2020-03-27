import { createAction } from 'redux-actions';

export const getStudents = createAction('LOAD_STUDENTS', () => ({
    request: {
        url: '/students'
    }
  })
);